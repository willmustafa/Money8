import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/base.service';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateCreditCardDto } from './dto/create-credit-card.dto';

@Injectable()
export class CreditCardService extends BaseService {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.creditCard);
  }

  create(createCreditCardDto: CreateCreditCardDto) {
    createCreditCardDto.dueDate = new Date(createCreditCardDto.dueDate);
    createCreditCardDto.closingDate = new Date(createCreditCardDto.closingDate);

    return this.prisma.creditCard.create({
      data: {
        ...createCreditCardDto,
      },
    });
  }

  async findAll(
    page = 1,
    pageSize = 25,
    sort = {},
    filter = {} as any,
  ): Promise<any> {
    let result = await super.findAll(page, pageSize, sort, {});

    if (filter?.show_sum === 'true')
      result = await this.appendSum(result, filter);

    return result;
  }

  async appendSum(result: any, filter: any) {
    const sumBy = await this.prisma.transaction.groupBy({
      where: {
        userId: this.userId,
        date: {
          lte: filter?.date ?? new Date().toISOString(),
        },
        paid: true,
        fromCreditCard: {
          not: null,
        },
      },
      by: ['fromCreditCard'],
      _sum: {
        value: true,
      },
      orderBy: {
        _sum: {
          value: 'desc',
        },
      },
    });

    result.items = result.items.map((acc: any) => {
      const sum =
        sumBy.find((el) => el.fromCreditCard === acc.id)?._sum.value ?? 0;
      return { ...acc, sum };
    });

    return result;
  }
}
