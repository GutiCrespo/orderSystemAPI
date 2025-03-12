-- CreateEnum
CREATE TYPE "States" AS ENUM ('pending', 'in_progress', 'completed');

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "state" "States" NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);
