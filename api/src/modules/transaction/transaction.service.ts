import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/base.service';
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
}
