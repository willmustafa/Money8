import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/base.controller';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController extends BaseController {
  constructor(private readonly accountService: AccountService) {
    super(accountService);
  }
}
