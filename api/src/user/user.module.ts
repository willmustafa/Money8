import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { InstitutionService } from 'src/institution/institution.service';
import { AccountService } from 'src/account/account.service';
import { CategoryService } from 'src/category/category.service';

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
