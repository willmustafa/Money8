import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { TransactionModule } from './transaction/transaction.module';
import { InstitutionModule } from './institution/institution.module';
import { TagModule } from './tag/tag.module';
import { IgnoreModule } from './ignore/ignore.module';
import { CategoryModule } from './category/category.module';
import { CreditCardModule } from './credit-card/credit-card.module';
import { AccountModule } from './account/account.module';
import { ObjectiveModule } from './objective/objective.module';

@Module({
  imports: [
    UserModule,
    TransactionModule,
    InstitutionModule,
    TagModule,
    IgnoreModule,
    CategoryModule,
    CreditCardModule,
    AccountModule,
    ObjectiveModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
