import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { RecipeIngredientsUpdateManyWithoutIngredientInput } from '../recipe-ingredients/recipe-ingredients-update-many-without-ingredient.input';

@InputType()
export class RecipeIngredientUpdateInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    quantity?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    scale?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => RecipeIngredientsUpdateManyWithoutIngredientInput, {nullable:true})
    recipesIngredients?: RecipeIngredientsUpdateManyWithoutIngredientInput;
}
