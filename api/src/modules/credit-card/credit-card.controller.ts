import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/base.controller';
import { CreditCardService } from './credit-card.service';

@Controller('credit-card')
export class CreditCardController extends BaseController {
  constructor(private readonly creditCardService: CreditCardService) {
    super(creditCardService);
  }
}
