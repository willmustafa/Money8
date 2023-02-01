import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { TransactionModule } from './transaction/transaction.module';
import { InstitutionModule } from './institution/institution.module';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [UserModule, TransactionModule, InstitutionModule, TagModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
