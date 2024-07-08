/*
  Warnings:

  - You are about to drop the column `purpose` on the `real_states` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "real_states" DROP COLUMN "purpose",
ADD COLUMN     "bathrooms" INTEGER,
ADD COLUMN     "bedrooms" INTEGER,
ADD COLUMN     "covered_square_meters" INTEGER,
ADD COLUMN     "details" TEXT,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "state" TEXT,
ADD COLUMN     "street" TEXT,
ADD COLUMN     "total_square_meters" INTEGER,
ADD COLUMN     "url" TEXT;
