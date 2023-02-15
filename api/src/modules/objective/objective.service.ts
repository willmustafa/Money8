import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/base.service';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateObjectiveDto } from './dto/create-objective.dto';

@Injectable()
export class ObjectiveService extends BaseService {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.objective);
  }

  create(createObjectiveDto: CreateObjectiveDto) {
    createObjectiveDto.dueDate = new Date(createObjectiveDto.dueDate);

    return this.prisma.objective.create({
      data: {
        ...createObjectiveDto,
      },
    });
  }
}
