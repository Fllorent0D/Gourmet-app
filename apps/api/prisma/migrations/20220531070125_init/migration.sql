/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Post";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Recipe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "author" TEXT,
    "imageUrl" TEXT,
    "thumbnailUrl" TEXT,
    "description" TEXT,
    "recipeCategory" TEXT,
    "recipeCuisine" TEXT,
    "yield" INTEGER,
    "prepTime" TEXT,
    "cookTime" TEXT,
    "totalTime" TEXT,
    "suitableForDiet" TEXT NOT NULL,
    "recipeNutritionId" INTEGER
);

-- CreateTable
CREATE TABLE "RecipeNutrition" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "calories" TEXT,
    "fatContent" TEXT,
    "saturatedFatContent" TEXT,
    "carbohydrateContent" TEXT,
    "sugarContent" TEXT,
    "proteinContent" TEXT,
    "fiberContent" TEXT,
    "cholesterolContent" TEXT,
    "sodiumContent" TEXT,
    "servingSize" INTEGER,
    "recipeId" INTEGER,
    CONSTRAINT "RecipeNutrition_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RecipeIngredients" (
    "recipeId" INTEGER NOT NULL,
    "ingredientId" INTEGER NOT NULL,

    PRIMARY KEY ("recipeId", "ingredientId"),
    CONSTRAINT "RecipeIngredients_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RecipeIngredients_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "RecipeIngredient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RecipeIngredient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantity" INTEGER,
    "scale" TEXT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "RecipeInstruction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "step" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "imageUrl" TEXT,
    "thumbnailUrl" TEXT,
    "recipeId" INTEGER,
    CONSTRAINT "RecipeInstruction_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "RecipeNutrition_recipeId_key" ON "RecipeNutrition"("recipeId");
