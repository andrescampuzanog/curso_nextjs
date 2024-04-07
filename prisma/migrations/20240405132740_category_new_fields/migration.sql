/*
  Warnings:

  - You are about to drop the column `userId` on the `Product` table. All the data in the column will be lost.
  - Added the required column `description` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `published` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_userId_fkey";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "published" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "userId";
