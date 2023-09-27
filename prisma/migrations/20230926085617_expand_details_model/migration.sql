/*
  Warnings:

  - You are about to drop the column `name` on the `details` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[heading,profession,email,phone,lang]` on the table `details` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `heading` to the `details` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `details_name_profession_email_phone_key` ON `details`;

-- AlterTable
ALTER TABLE `details` DROP COLUMN `name`,
    ADD COLUMN `heading` VARCHAR(50) NOT NULL,
    ADD COLUMN `lang` ENUM('ENG', 'HUN') NOT NULL DEFAULT 'ENG';

-- CreateIndex
CREATE UNIQUE INDEX `details_heading_profession_email_phone_lang_key` ON `details`(`heading`, `profession`, `email`, `phone`, `lang`);
