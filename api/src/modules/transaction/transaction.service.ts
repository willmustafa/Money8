import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/base.service';
import {
  getFirstDayOfMonth,
  getLastDayOfMonth,
  subtractOneMonth,
} from 'src/shared/helpers/Dates';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class TransactionService extends BaseService {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.transaction);
  }

  create(createTransactionDto: CreateTransactionDto) {
    createTransactionDto.date = new Date(createTransactionDto.date);

    return this.prisma.transaction.create({
      data: {
        ...createTransactionDto,
      },
    });
  }

  async getMonthlySum(filters: any) {
    const expenses = (await this.getExpensesByMonth(filters?.date)) ?? 0;
    const expensesFromLastMonth =
      (await this.getExpensesByMonth(subtractOneMonth(filters?.date))) ?? 0;

    const incomes = (await this.getIncomesByMonth(filters?.date)) ?? 0;
    const incomesFromLastMonth =
      (await this.getIncomesByMonth(subtractOneMonth(filters?.date))) ?? 0;

    const balance = incomes - Math.abs(expenses);
    const totalBalance = (await this.getTotalSum()) ?? 0;
    return {
      expenses,
      expensesFromLastMonth,
      expensesVariation: this.getPercentage(expenses, expensesFromLastMonth),
      incomes,
      incomesFromLastMonth,
      incomesVariation: this.getPercentage(incomes, incomesFromLastMonth),
      balance,
      totalBalance,
    };
  }

  async getExpensesByMonth(date: string) {
    return await this.prisma.transaction
      .aggregate({
        where: {
          userId: this.userId,
          date: {
            lte: getLastDayOfMonth(date),
            gte: getFirstDayOfMonth(date),
          },
          paid: true,
          value: {
            lte: 0,
          },
        },
        _sum: {
          value: true,
        },
      })
      .then((res) => res._sum.value);
  }

  async getIncomesByMonth(date: string) {
    return await this.prisma.transaction
      .aggregate({
        where: {
          userId: this.userId,
          date: {
            lte: getLastDayOfMonth(date),
            gte: getFirstDayOfMonth(date),
          },
          paid: true,
          value: {
            gte: 0,
          },
        },
        _sum: {
          value: true,
        },
      })
      .then((res) => res._sum.value);
  }

  async getTotalSum() {
    const transactionSum =
      (await this.prisma.transaction
        .aggregate({
          where: {
            userId: this.userId,
            paid: true,
          },
          _sum: {
            value: true,
          },
        })
        .then((res) => res._sum.value)) ?? 0;

    const accountSum =
      (await this.prisma.account
        .aggregate({
          where: {
            userId: this.userId,
          },
          _sum: {
            initialBalance: true,
          },
        })
        .then((res) => res._sum.initialBalance)) ?? 0;

    return accountSum + transactionSum;
  }

  getPercentage(current: number, last: number): number {
    current = Math.abs(current);
    last = Math.abs(last);
    const divided = last === 0 ? 1 : last;
    return ((current - last) / divided) * 100;
  }
}
