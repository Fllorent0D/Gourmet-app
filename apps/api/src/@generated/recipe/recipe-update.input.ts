import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { RecipeNutritionUpdateOneWithoutRecipeInput } from '../recipe-nutrition/recipe-nutrition-update-one-without-recipe.input';
import { RecipeInstructionUpdateManyWithoutRecipeInput } from '../recipe-instruction/recipe-instruction-update-many-without-recipe.input';
import { RecipeIngredientsUpdateManyWithoutRecipeInput } from '../recipe-ingredients/recipe-ingredients-update-many-without-recipe.input';

@InputType()
export class RecipeUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    author?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    imageUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    recipeCategory?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    recipeCuisine?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    yield?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    prepTime?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    cookTime?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    totalTime?: NullableStringFieldUpdateOperationsInput;

    @Field(() => RecipeNutritionUpdateOneWithoutRecipeInput, {nullable:true})
    nutrition?: RecipeNutritionUpdateOneWithoutRecipeInput;

    @Field(() => RecipeInstructionUpdateManyWithoutRecipeInput, {nullable:true})
    instructions?: RecipeInstructionUpdateManyWithoutRecipeInput;

    @Field(() => RecipeIngredientsUpdateManyWithoutRecipeInput, {nullable:true})
    ingredients?: RecipeIngredientsUpdateManyWithoutRecipeInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    suitableForDiet?: StringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    recipeNutritionId?: NullableIntFieldUpdateOperationsInput;
}
