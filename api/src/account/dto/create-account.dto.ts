import { Prisma } from '@prisma/client';

export class CreateAccountDto implements Prisma.AccountCreateInput {
  id?: string | undefined;
  initialBalance?: number | undefined;
  openingDate: string | Date;
  institutionId: string;
  userId: string;
}
