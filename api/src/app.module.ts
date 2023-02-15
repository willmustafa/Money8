import { Module } from '@nestjs/common';
import { PrismaService } from './shared/prisma/prisma.service';
import { UserModule } from './modules/user/user.module';
import { TransactionModule } from './modules/transaction/transaction.module';
import { InstitutionModule } from './modules/institution/institution.module';
import { TagModule } from './modules/tag/tag.module';
import { IgnoreModule } from './modules/ignore/ignore.module';
import { CategoryModule } from './modules/category/category.module';
import { CreditCardModule } from './modules/credit-card/credit-card.module';
import { AccountModule } from './modules/account/account.module';
import { ObjectiveModule } from './modules/objective/objective.module';
import { AuthModule } from './modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';

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
    AuthModule,
  ],
  controllers: [],
  providers: [
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
