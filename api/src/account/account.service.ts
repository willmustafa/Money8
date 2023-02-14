import { Injectable } from '@nestjs/common';
import { institutionDump } from 'src/institution/dump/institution.dump';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { accountDump } from './dump/account.dump';

@Injectable()
export class AccountService {
  constructor(private readonly prisma: PrismaService) {}

  create(createAccountDto: CreateAccountDto) {
    createAccountDto.openingDate = new Date(createAccountDto.openingDate);

    return this.prisma.account.create({
      data: {
        ...createAccountDto,
      },
    });
  }

  findAll() {
    return this.prisma.account.findMany();
  }

  findOne(id: string) {
    return this.prisma.account.findUnique({
      where: { id },
    });
  }

  update(id: string, updateAccountDto: UpdateAccountDto) {
    return this.prisma.account.update({
      where: { id },
      data: {
        ...updateAccountDto,
      },
    });
  }

  remove(id: string) {
    return this.prisma.account.delete({
      where: { id },
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
