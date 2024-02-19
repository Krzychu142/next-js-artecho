/*
  Warnings:

  - You are about to drop the `newsletterSubscribers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "newsletterSubscribers";

-- CreateTable
CREATE TABLE "NewsletterSubscribers" (
    "email" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "NewsletterSubscribers_email_key" ON "NewsletterSubscribers"("email");
