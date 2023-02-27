import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/base.service';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateTagDto } from './dto/create-tag.dto';

@Injectable()
export class TagService extends BaseService {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.tag);
  }

  async findAll(
    page = 1,
    pageSize = 25,
    sort = {},
    filter = {} as any,
  ): Promise<any> {
    let result = await super.findAll(page, pageSize, sort, {});

    if (filter?.show_sum === 'true')
      result = await this.appendSum(result, filter);

    return result;
  }

  async appendSum(result: any, filter: any) {
    const sumByTag = await this.prisma.transaction.groupBy({
      where: {
        userId: this.userId,
        date: {
          lte: filter?.date ?? new Date().toISOString(),
        },
        paid: true,
        tagId: {
          in: result.items.map((el: CreateTagDto) => el.id) as string[],
        },
      },
      by: ['tagId'],
      _sum: {
        value: true,
      },
      orderBy: {
        _sum: {
          value: 'desc',
        },
      },
    });

    result.items = result.items.map((acc: any) => {
      const sum = sumByTag.find((el) => el.tagId === acc.id)?._sum.value ?? 0;
      return { ...acc, sum };
    });

    return result;
  }
}
