import { Prisma } from '@prisma/client';

export class CreateCategoryDto implements Prisma.CategoryCreateInput {
  id?: string | undefined;
  category: string;
  color: string;
  icon: string;
  type: string;
  userId: string;
}
