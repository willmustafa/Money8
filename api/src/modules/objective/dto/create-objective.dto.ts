import { Prisma } from '@prisma/client';

export class CreateObjectiveDto implements Prisma.ObjectiveCreateInput {
  id?: string | undefined;
  name: string;
  color: string;
  value: number;
  dueDate: string | Date;
  description: string;
  status?: boolean | undefined;
  userId: string;
}
