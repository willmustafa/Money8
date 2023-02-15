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
}
