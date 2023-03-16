-- CreateTable
CREATE TABLE "campaign" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "campaign_id_key" ON "campaign"("id");
