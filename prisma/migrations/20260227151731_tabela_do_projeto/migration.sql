/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- DropTable
DROP TABLE `Post`;

-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `Artigos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `DescricaoDoArtigo` VARCHAR(191) NOT NULL,
    `Autor` VARCHAR(191) NOT NULL,
    `DataPubli` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Tags` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Artigos_titulo_key`(`titulo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
