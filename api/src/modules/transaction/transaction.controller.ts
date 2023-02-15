import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/base.controller';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController extends BaseController {
  constructor(private readonly transactionService: TransactionService) {
    super(transactionService);
  }
}
