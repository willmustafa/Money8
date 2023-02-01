import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateIgnoreDto } from './dto/create-ignore.dto';
import { UpdateIgnoreDto } from './dto/update-ignore.dto';

@Injectable()
export class IgnoreService {
  constructor(private readonly prisma: PrismaService) {}

  create(createIgnoreDto: CreateIgnoreDto) {
    return this.prisma.ignore.create({
      data: {
        ...createIgnoreDto,
      },
    });
  }

  findAll() {
    return this.prisma.ignore.findMany();
  }

  findOne(id: string) {
    return this.prisma.ignore.findUnique({
      where: { id },
    });
  }

  update(id: string, updateIgnoreDto: UpdateIgnoreDto) {
    return this.prisma.ignore.update({
      where: { id },
      data: {
        ...updateIgnoreDto,
      },
    });
  }

  remove(id: string) {
    return this.prisma.ignore.delete({
      where: { id },
    });
  }
}
