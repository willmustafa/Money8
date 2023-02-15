/*
  Warnings:

  - A unique constraint covering the columns `[name,userId]` on the table `Institution` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Institution_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "Institution_name_userId_key" ON "Institution"("name", "userId");
