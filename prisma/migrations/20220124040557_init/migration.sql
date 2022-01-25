-- CreateTable
CREATE TABLE "dogs" (
  "id" SERIAL NOT NULL,
  "name" TEXT NOT NULL,
  "breed" TEXT NOT NULL,
  CONSTRAINT "dogs_pkey" PRIMARY KEY ("id")
);