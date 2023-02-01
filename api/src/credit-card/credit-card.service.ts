import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCreditCardDto } from './dto/create-credit-card.dto';
import { UpdateCreditCardDto } from './dto/update-credit-card.dto';

@Injectable()
export class CreditCardService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCreditCardDto: CreateCreditCardDto) {
    createCreditCardDto.dueDate = new Date(createCreditCardDto.dueDate);
    createCreditCardDto.closingDate = new Date(createCreditCardDto.closingDate);

    return this.prisma.creditCard.create({
      data: {
        ...createCreditCardDto,
      },
    });
  }

  findAll() {
    return this.prisma.creditCard.findMany();
  }

  findOne(id: string) {
    return this.prisma.creditCard.findUnique({
      where: { id },
    });
  }

  update(id: string, updateCreditCardDto: UpdateCreditCardDto) {
    return this.prisma.creditCard.update({
      where: { id },
      data: {
        ...updateCreditCardDto,
      },
    });
  }

  remove(id: string) {
    return this.prisma.creditCard.delete({
      where: { id },
    });
  }
}
