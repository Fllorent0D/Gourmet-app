import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class RecipeIngredientsUncheckedUpdateManyInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    recipeId?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    ingredientId?: IntFieldUpdateOperationsInput;
}
