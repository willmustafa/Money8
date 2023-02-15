import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/base.service';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { institutionDump } from './dump/institution.dump';

@Injectable()
export class InstitutionService extends BaseService {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.institution);
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
