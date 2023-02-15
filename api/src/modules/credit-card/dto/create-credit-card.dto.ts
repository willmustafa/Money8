import { Prisma } from '@prisma/client';

export class CreateCreditCardDto implements Prisma.CreditCardCreateInput {
  id?: string | undefined;
  limit: number;
  dueDate: Date;
  closingDate: Date;
  institutionId: string;
  userId: string;
}
