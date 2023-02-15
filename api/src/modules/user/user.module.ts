import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { InstitutionService } from 'src/modules/institution/institution.service';
import { AccountService } from 'src/modules/account/account.service';
import { CategoryService } from 'src/modules/category/category.service';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    PrismaService,
    InstitutionService,
    AccountService,
    CategoryService,
  ],
  exports: [UserService],
})
export class UserModule {}
