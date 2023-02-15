import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/base.service';
import { institutionDump } from 'src/modules/institution/dump/institution.dump';
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
}
