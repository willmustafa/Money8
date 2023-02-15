import { Controller } from '@nestjs/common';
import { IgnoreService } from './ignore.service';
import { BaseController } from 'src/core/base.controller';

@Controller('ignore')
export class IgnoreController extends BaseController {
  constructor(private readonly ignoreService: IgnoreService) {
    super(ignoreService);
  }
}
