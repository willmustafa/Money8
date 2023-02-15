import { Controller } from '@nestjs/common';
import { TagService } from './tag.service';
import { BaseController } from 'src/core/base.controller';

@Controller('tag')
export class TagController extends BaseController {
  constructor(private readonly tagService: TagService) {
    super(tagService);
  }
}
