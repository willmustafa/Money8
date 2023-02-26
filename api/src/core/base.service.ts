import { HttpException, HttpStatus } from '@nestjs/common';

export abstract class BaseService {
  constructor(private readonly prismaModel: any) {}

  public userId: string | undefined = undefined;

  create(createDto: any): any {
    return this.prismaModel.create({
      data: {
        ...createDto,
      },
    });
  }

  async findAll(page = 1, pageSize = 25, sort = {}, filter = {}): Promise<any> {
    const items = await this.prismaModel.findMany({
      take: pageSize,
      skip: (page - 1) * pageSize,
      where: filter,
      orderBy: sort,
    });

    const totalCount = await this.prismaModel.count({ where: filter });

    return {
      page: Number(page),
      pageSize: Number(pageSize),
      totalCount: Number(totalCount),
      items,
    };
  }

  findOne(id: string, filter = {}): any {
    return this.prismaModel.findFirst({
      where: { id, ...filter },
    });
  }

  async update(id: string, updateDto: any, filter: any = {}): Promise<any> {
    await this.failIfNotFromSameUser(id, filter);

    return this.prismaModel.update({
      where: { id },
      data: {
        ...updateDto,
      },
    });
  }

  async remove(id: string, filter = {}): Promise<any> {
    await this.failIfNotFromSameUser(id, filter);

    return this.prismaModel.delete({
      where: { id },
    });
  }

  private async failIfNotFromSameUser(id: string, filter: any = {}) {
    const entityOnDb = await this.findOne(id, filter);
    if (entityOnDb.userId !== filter.userId)
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  }
}
