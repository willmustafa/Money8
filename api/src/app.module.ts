import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [UserModule, TransactionModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
