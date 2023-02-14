import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { institutionDump } from './dump/institution.dump';

@Injectable()
export class InstitutionService {
  constructor(private readonly prisma: PrismaService) {}

  create(createInstitutionDto: CreateInstitutionDto) {
    return this.prisma.institution.create({
      data: {
        ...createInstitutionDto,
      },
    });
  }

  findAll() {
    return this.prisma.institution.findMany();
  }

  findOne(id: string) {
    return this.prisma.institution.findUnique({
      where: { id },
    });
  }

  update(id: string, updateInstitutionDto: UpdateInstitutionDto) {
    return this.prisma.institution.update({
      where: { id },
      data: {
        ...updateInstitutionDto,
      },
    });
  }

  remove(id: string) {
    return this.prisma.institution.delete({
      where: { id },
    });
  }

  async createFromDump(userId: string) {
    for await (const institution of institutionDump) {
      await this.prisma.institution.create({
        data: {
          ...institution,
          userId,
        },
      });
    }
  }
}
