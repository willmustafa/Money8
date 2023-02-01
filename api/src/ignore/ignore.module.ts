import { Module } from '@nestjs/common';
import { IgnoreService } from './ignore.service';
import { IgnoreController } from './ignore.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [IgnoreController],
  providers: [IgnoreService, PrismaService],
})
export class IgnoreModule {}
