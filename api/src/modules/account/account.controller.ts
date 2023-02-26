import { Controller, Get, Query, Request } from '@nestjs/common';
import { BaseController } from 'src/core/base.controller';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController extends BaseController {
  constructor(private readonly accountService: AccountService) {
    super(accountService);
  }

  @Get('sum')
  async getMonthlySum(
    @Query('date') date = new Date().toISOString(),
    @Request() request: any,
  ) {
    this.accountService.userId = request.user.id;
    return await this.accountService.getMonthlySum(date);
  }
}
