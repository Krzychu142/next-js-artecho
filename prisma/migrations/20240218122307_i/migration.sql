-- CreateTable
CREATE TABLE "newsletterSubscribers" (
    "email" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "newsletterSubscribers_email_key" ON "newsletterSubscribers"("email");
