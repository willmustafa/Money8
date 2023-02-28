import { Controller, Get, Query, Request } from '@nestjs/common';
import { parse } from 'qs';
import { BaseController } from 'src/core/base.controller';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController extends BaseController {
  constructor(private readonly transactionService: TransactionService) {
    super(transactionService);
  }

  @Get('sum')
  async getMonthlySum(@Query('filter') filter = '', @Request() request: any) {
    const parsedFilter = filter === '' ? {} : parse(filter);
    this.transactionService.userId = request.user.id;

    return await this.transactionService.getMonthlySum(parsedFilter);
  }
}
