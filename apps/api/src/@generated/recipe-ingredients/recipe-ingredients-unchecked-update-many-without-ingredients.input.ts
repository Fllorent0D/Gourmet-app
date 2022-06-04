import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class RecipeIngredientsUncheckedUpdateManyWithoutIngredientsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ingredientId?: StringFieldUpdateOperationsInput;
}
