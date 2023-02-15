export abstract class BaseService {
  constructor(private readonly prismaModel: any) {}

  create(createDto: any): any {
    return this.prismaModel.create({
      data: {
        ...createDto,
      },
    });
  }

  findAll(): any {
    return this.prismaModel.findMany({});
  }

  findOne(id: string): any {
    return this.prismaModel.findUnique({
      where: { id },
    });
  }

  update(id: string, updateDto: any): any {
    return this.prismaModel.update({
      where: { id },
      data: {
        ...updateDto,
      },
    });
  }

  remove(id: string): any {
    return this.prismaModel.delete({
      where: { id },
    });
  }
}
