import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/base.service';
import { getLastDayOfMonth } from 'src/shared/helpers/Dates';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { categoryDump } from './dump/category.dump';

@Injectable()
export class CategoryService extends BaseService {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.category);
  }

  async createFromDump(userId: string) {
    for await (const category of categoryDump) {
      await this.prisma.category.create({
        data: {
          ...category,
          userId,
        },
      });
    }
  }

  async getMonthlySum(date: string) {
    const sumByCategory = await this.prisma.transaction.groupBy({
      where: {
        userId: this.userId,
        date: {
          lte: getLastDayOfMonth(date),
        },
        paid: true,
      },
      by: ['categoryId'],
      _sum: {
        value: true,
      },
      orderBy: {
        _sum: {
          value: 'desc',
        },
      },
    });

    const categories = await this.prisma.category.findMany({
      where: {
        userId: this.userId,
        id: {
          in: sumByCategory.map((el) => el.categoryId) as string[],
        },
      },
    });

    const result = categories.map((cat) => {
      const sum = sumByCategory.find((el) => el.categoryId === cat.id);
      return { ...cat, sum: sum?._sum.value };
    });

    const sumByType = result.reduce((acc: any, curr: any) => {
      if (acc[curr.type]) {
        acc[curr.type] += curr.sum;
      } else {
        acc[curr.type] = curr.sum;
      }
      return acc;
    }, {});

    return { result, sumByType };
  }
}
