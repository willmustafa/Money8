import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Injectable()
export class TagService {
  constructor(private readonly prisma: PrismaService) {}

  create(createTagDto: CreateTagDto) {
    return this.prisma.tag.create({
      data: {
        ...createTagDto,
      },
    });
  }

  findAll() {
    return this.prisma.tag.findMany();
  }

  findOne(id: string) {
    return this.prisma.tag.findUnique({
      where: { id },
    });
  }

  update(id: string, updateTagDto: UpdateTagDto) {
    return this.prisma.tag.update({
      where: { id },
      data: {
        ...updateTagDto,
      },
    });
  }

  remove(id: string) {
    return this.prisma.tag.delete({
      where: { id },
    });
  }
}
