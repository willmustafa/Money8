import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { TransactionModule } from './transaction/transaction.module';
import { InstitutionModule } from './institution/institution.module';
import { TagModule } from './tag/tag.module';
import { IgnoreModule } from './ignore/ignore.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [UserModule, TransactionModule, InstitutionModule, TagModule, IgnoreModule, CategoryModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
