import { registerEnumType } from '@nestjs/graphql';

export enum RecipeInstructionScalarFieldEnum {
    id = "id",
    step = "step",
    text = "text",
    imageUrl = "imageUrl",
    thumbnailUrl = "thumbnailUrl",
    recipeId = "recipeId"
}


registerEnumType(RecipeInstructionScalarFieldEnum, { name: 'RecipeInstructionScalarFieldEnum', description: undefined })
