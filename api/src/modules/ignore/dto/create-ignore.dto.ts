import { Prisma } from '@prisma/client';

export class CreateIgnoreDto implements Prisma.IgnoreCreateInput {
  id?: string | undefined;
  name: string;
  userId: string;
}
