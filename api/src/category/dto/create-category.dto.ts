import { Prisma } from '@prisma/client';
import { Transform } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { toLowerCase, toSnakeCase } from 'src/shared/helpers/Strings';
import { categoryTypes } from './categoryTypes.enum';

export class CreateCategoryDto implements Prisma.CategoryCreateInput {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @Transform(({ value }) => toSnakeCase(toLowerCase(value)))
  color: string;

  @IsNotEmpty()
  @Transform(({ value }) => toLowerCase(value))
  icon: string;

  @Transform(({ value }) => toLowerCase(value))
  type: categoryTypes;

  userId: string;
}
