-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Fulfilled', 'Unfulfilled');

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'Unfulfilled',

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
