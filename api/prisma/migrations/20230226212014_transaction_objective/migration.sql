-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "transferedToObjectiveId" TEXT;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_transferedToObjectiveId_fkey" FOREIGN KEY ("transferedToObjectiveId") REFERENCES "Objective"("id") ON DELETE SET NULL ON UPDATE CASCADE;
