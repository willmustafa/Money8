import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { toJson } from 'ofx-convertjs';
import { OfxDto } from './dto/ofx.dto';

@Injectable()
export class ImportService {
  constructor(private readonly prisma: PrismaService) {}

  importFromOFX(file: string) {
    const jsonOFX = toJson(file) as OfxDto;
    return jsonOFX;
  }
}
