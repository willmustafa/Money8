import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateObjectiveDto } from './dto/create-objective.dto';
import { UpdateObjectiveDto } from './dto/update-objective.dto';

@Injectable()
export class ObjectiveService {
  constructor(private readonly prisma: PrismaService) {}

  create(createObjectiveDto: CreateObjectiveDto) {
    createObjectiveDto.dueDate = new Date(createObjectiveDto.dueDate);

    return this.prisma.objective.create({
      data: {
        ...createObjectiveDto,
      },
    });
  }

  findAll() {
    return this.prisma.objective.findMany();
  }

  findOne(id: string) {
    return this.prisma.objective.findUnique({
      where: { id },
    });
  }

  update(id: string, updateObjectiveDto: UpdateObjectiveDto) {
    return this.prisma.objective.update({
      where: { id },
      data: {
        ...updateObjectiveDto,
      },
    });
  }

  remove(id: string) {
    return this.prisma.objective.delete({
      where: { id },
    });
  }
}
