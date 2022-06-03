import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class RecipeIngredientsUncheckedUpdateManyWithoutRecipesIngredientsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    recipeId?: IntFieldUpdateOperationsInput;
}
