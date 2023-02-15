import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/base.service';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { categoryDump } from './dump/category.dump';

@Injectable()
export class CategoryService extends BaseService {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.category);
  }

  async createFromDump(userId: string) {
    for await (const category of categoryDump) {
      await this.prisma.category.create({
        data: {
          ...category,
          userId,
        },
      });
    }
  }
}
