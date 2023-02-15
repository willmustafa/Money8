import { Controller } from '@nestjs/common';
import { ObjectiveService } from './objective.service';
import { BaseController } from 'src/core/base.controller';

@Controller('objective')
export class ObjectiveController extends BaseController {
  constructor(private readonly objectiveService: ObjectiveService) {
    super(objectiveService);
  }
}
