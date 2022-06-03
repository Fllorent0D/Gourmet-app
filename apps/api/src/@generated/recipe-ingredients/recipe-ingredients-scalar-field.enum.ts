import { registerEnumType } from '@nestjs/graphql';

export enum RecipeIngredientsScalarFieldEnum {
    recipeId = "recipeId",
    ingredientId = "ingredientId"
}


registerEnumType(RecipeIngredientsScalarFieldEnum, { name: 'RecipeIngredientsScalarFieldEnum', description: undefined })
