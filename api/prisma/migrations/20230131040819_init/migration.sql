-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "paid" BOOLEAN NOT NULL,
    "transferedTo" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Institution" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Institution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ignore" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Ignore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CreditCard" (
    "id" TEXT NOT NULL,
    "limit" DOUBLE PRECISION NOT NULL,
    "dueDate" DATE NOT NULL,
    "closingDate" DATE NOT NULL,
    "institutionId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "CreditCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "initialBalance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "openingDate" DATE NOT NULL,
    "institutionId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Objective" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "dueDate" DATE NOT NULL,
    "description" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Objective_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Institution_name_key" ON "Institution"("name");

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Institution" ADD CONSTRAINT "Institution_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ignore" ADD CONSTRAINT "Ignore_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreditCard" ADD CONSTRAINT "CreditCard_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreditCard" ADD CONSTRAINT "CreditCard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Objective" ADD CONSTRAINT "Objective_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
