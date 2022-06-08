/*
  Warnings:

  - The primary key for the `RecipeInstruction` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `RecipeIngredient` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `RecipeNutrition` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `RecipeIngredients` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Recipe` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RecipeInstruction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "step" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "imageUrl" TEXT,
    "thumbnailUrl" TEXT,
    "recipeId" TEXT,
    CONSTRAINT "RecipeInstruction_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_RecipeInstruction" ("id", "imageUrl", "recipeId", "step", "text", "thumbnailUrl") SELECT "id", "imageUrl", "recipeId", "step", "text", "thumbnailUrl" FROM "RecipeInstruction";
DROP TABLE "RecipeInstruction";
ALTER TABLE "new_RecipeInstruction" RENAME TO "RecipeInstruction";
CREATE TABLE "new_RecipeIngredient" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "quantity" INTEGER,
    "scale" TEXT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_RecipeIngredient" ("id", "name", "quantity", "scale") SELECT "id", "name", "quantity", "scale" FROM "RecipeIngredient";
DROP TABLE "RecipeIngredient";
ALTER TABLE "new_RecipeIngredient" RENAME TO "RecipeIngredient";
CREATE TABLE "new_RecipeNutrition" (
    "id" TEXT NOT NULL PRIMARY KEY,
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
    "recipeId" TEXT,
    CONSTRAINT "RecipeNutrition_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_RecipeNutrition" ("calories", "carbohydrateContent", "cholesterolContent", "fatContent", "fiberContent", "id", "proteinContent", "recipeId", "saturatedFatContent", "servingSize", "sodiumContent", "sugarContent") SELECT "calories", "carbohydrateContent", "cholesterolContent", "fatContent", "fiberContent", "id", "proteinContent", "recipeId", "saturatedFatContent", "servingSize", "sodiumContent", "sugarContent" FROM "RecipeNutrition";
DROP TABLE "RecipeNutrition";
ALTER TABLE "new_RecipeNutrition" RENAME TO "RecipeNutrition";
CREATE UNIQUE INDEX "RecipeNutrition_recipeId_key" ON "RecipeNutrition"("recipeId");
CREATE TABLE "new_RecipeIngredients" (
    "recipeId" TEXT NOT NULL,
    "ingredientId" TEXT NOT NULL,

    PRIMARY KEY ("recipeId", "ingredientId"),
    CONSTRAINT "RecipeIngredients_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RecipeIngredients_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "RecipeIngredient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_RecipeIngredients" ("ingredientId", "recipeId") SELECT "ingredientId", "recipeId" FROM "RecipeIngredients";
DROP TABLE "RecipeIngredients";
ALTER TABLE "new_RecipeIngredients" RENAME TO "RecipeIngredients";
CREATE TABLE "new_Recipe" (
    "id" TEXT NOT NULL PRIMARY KEY,
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
    "suitableForDiet" TEXT,
    "recipeNutritionId" INTEGER
);
INSERT INTO "new_Recipe" ("author", "cookTime", "description", "id", "imageUrl", "name", "prepTime", "recipeCategory", "recipeCuisine", "recipeNutritionId", "suitableForDiet", "thumbnailUrl", "totalTime", "yield") SELECT "author", "cookTime", "description", "id", "imageUrl", "name", "prepTime", "recipeCategory", "recipeCuisine", "recipeNutritionId", "suitableForDiet", "thumbnailUrl", "totalTime", "yield" FROM "Recipe";
DROP TABLE "Recipe";
ALTER TABLE "new_Recipe" RENAME TO "Recipe";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
