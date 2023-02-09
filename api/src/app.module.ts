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
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

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
