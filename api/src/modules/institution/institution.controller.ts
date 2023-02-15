import { Controller } from '@nestjs/common';
import { InstitutionService } from './institution.service';
import { BaseController } from 'src/core/base.controller';

@Controller('institution')
export class InstitutionController extends BaseController {
  constructor(private readonly institutionService: InstitutionService) {
    super(institutionService);
  }
}
