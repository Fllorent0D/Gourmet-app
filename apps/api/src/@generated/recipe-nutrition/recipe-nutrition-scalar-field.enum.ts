import { registerEnumType } from '@nestjs/graphql';

export enum RecipeNutritionScalarFieldEnum {
    id = "id",
    calories = "calories",
    fatContent = "fatContent",
    saturatedFatContent = "saturatedFatContent",
    carbohydrateContent = "carbohydrateContent",
    sugarContent = "sugarContent",
    proteinContent = "proteinContent",
    fiberContent = "fiberContent",
    cholesterolContent = "cholesterolContent",
    sodiumContent = "sodiumContent",
    servingSize = "servingSize",
    recipeId = "recipeId"
}


registerEnumType(RecipeNutritionScalarFieldEnum, { name: 'RecipeNutritionScalarFieldEnum', description: undefined })
