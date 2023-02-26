import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/base.service';
import { institutionDump } from 'src/modules/institution/dump/institution.dump';
import { getLastDayOfMonth } from 'src/shared/helpers/Dates';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { accountDump } from './dump/account.dump';

@Injectable()
export class AccountService extends BaseService {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.account);
  }

  create(createAccountDto: CreateAccountDto) {
    createAccountDto.openingDate = new Date(createAccountDto.openingDate);

    return this.prisma.account.create({
      data: {
        ...createAccountDto,
      },
    });
  }

  async createFromDump(userId: string) {
    const institutionDinheiro = await this.prisma.institution.findFirst({
      where: {
        name: institutionDump.find((el) => el.name === 'Dinheiro')?.name,
      },
    });

    if (institutionDinheiro) {
      for await (const account of accountDump) {
        await this.prisma.account.create({
          data: {
            ...account,
            institutionId: institutionDinheiro.id,
            userId,
          },
        });
      }
    }
  }

  async getMonthlySum(date: string) {
    const sumByAccount = await this.prisma.transaction.groupBy({
      where: {
        userId: this.userId,
        date: {
          lte: getLastDayOfMonth(date),
        },
        paid: true,
      },
      by: ['fromAccount'],
      _sum: {
        value: true,
      },
      orderBy: {
        _sum: {
          value: 'desc',
        },
      },
    });

    const accounts = await this.prisma.account.findMany({
      where: {
        userId: this.userId,
        id: {
          in: sumByAccount.map((el) => el.fromAccount) as string[],
        },
      },
    });

    const objectives = await this.prisma.objective.findMany({
      where: {
        userId: this.userId,
      },
    });

    const toObjectiveTransactions = await this.prisma.transaction.groupBy({
      where: {
        userId: this.userId,
        date: {
          lte: getLastDayOfMonth(date),
        },
        paid: true,
        transferedToObjectiveId: {
          in: objectives.map((el) => el.id),
        },
      },
      by: ['fromAccount'],
      _sum: {
        value: true,
      },
      orderBy: {
        _sum: {
          value: 'desc',
        },
      },
    });

    let result = accounts.map((acc) => {
      const sum =
        sumByAccount.find((el) => el.fromAccount === acc.id)?._sum.value ?? 0;
      return { ...acc, sum: sum + acc.initialBalance };
    });

    result = result.map((acc) => {
      const sumToObjective = toObjectiveTransactions.find(
        (el) => el.fromAccount === acc.id,
      );
      return {
        ...acc,
        sumToObjective: sumToObjective?._sum?.value,
      };
    });

    return { result };
  }
}
