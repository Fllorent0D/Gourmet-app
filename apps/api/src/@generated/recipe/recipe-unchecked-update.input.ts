import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { RecipeNutritionUncheckedUpdateOneWithoutRecipeInput } from '../recipe-nutrition/recipe-nutrition-unchecked-update-one-without-recipe.input';
import { RecipeInstructionUncheckedUpdateManyWithoutRecipeInput } from '../recipe-instruction/recipe-instruction-unchecked-update-many-without-recipe.input';
import { RecipeIngredientsUncheckedUpdateManyWithoutRecipeInput } from '../recipe-ingredients/recipe-ingredients-unchecked-update-many-without-recipe.input';

@InputType()
export class RecipeUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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

    @Field(() => RecipeNutritionUncheckedUpdateOneWithoutRecipeInput, {nullable:true})
    nutrition?: RecipeNutritionUncheckedUpdateOneWithoutRecipeInput;

    @Field(() => RecipeInstructionUncheckedUpdateManyWithoutRecipeInput, {nullable:true})
    instructions?: RecipeInstructionUncheckedUpdateManyWithoutRecipeInput;

    @Field(() => RecipeIngredientsUncheckedUpdateManyWithoutRecipeInput, {nullable:true})
    ingredients?: RecipeIngredientsUncheckedUpdateManyWithoutRecipeInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    suitableForDiet?: StringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    recipeNutritionId?: NullableIntFieldUpdateOperationsInput;
}
