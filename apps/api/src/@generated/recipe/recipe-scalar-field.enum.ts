import { registerEnumType } from '@nestjs/graphql';

export enum RecipeScalarFieldEnum {
    id = "id",
    name = "name",
    author = "author",
    imageUrl = "imageUrl",
    thumbnailUrl = "thumbnailUrl",
    description = "description",
    recipeCategory = "recipeCategory",
    recipeCuisine = "recipeCuisine",
    'yield' = "yield",
    prepTime = "prepTime",
    cookTime = "cookTime",
    totalTime = "totalTime",
    suitableForDiet = "suitableForDiet",
    recipeNutritionId = "recipeNutritionId"
}


registerEnumType(RecipeScalarFieldEnum, { name: 'RecipeScalarFieldEnum', description: undefined })
