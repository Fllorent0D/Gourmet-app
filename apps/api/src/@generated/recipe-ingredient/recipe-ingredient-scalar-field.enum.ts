import { registerEnumType } from '@nestjs/graphql';

export enum RecipeIngredientScalarFieldEnum {
    id = "id",
    quantity = "quantity",
    scale = "scale",
    name = "name"
}


registerEnumType(RecipeIngredientScalarFieldEnum, { name: 'RecipeIngredientScalarFieldEnum', description: undefined })
