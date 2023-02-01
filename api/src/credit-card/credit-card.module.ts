import { Module } from '@nestjs/common';
import { CreditCardService } from './credit-card.service';
import { CreditCardController } from './credit-card.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CreditCardController],
  providers: [CreditCardService, PrismaService],
})
export class CreditCardModule {}
