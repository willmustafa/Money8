import { Prisma } from '@prisma/client';

export class CreateTagDto implements Prisma.TagCreateInput {
  id?: string | undefined;
  name: string;
  userId: string;
}
