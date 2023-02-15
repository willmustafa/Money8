import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/base.service';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class IgnoreService extends BaseService {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.ignore);
  }
}
