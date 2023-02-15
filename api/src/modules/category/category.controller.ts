import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/base.controller';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController extends BaseController {
  constructor(private readonly categoryService: CategoryService) {
    super(categoryService);
  }
}
