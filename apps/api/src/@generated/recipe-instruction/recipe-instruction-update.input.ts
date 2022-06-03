import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { RecipeUpdateOneWithoutInstructionsInput } from '../recipe/recipe-update-one-without-instructions.input';

@InputType()
export class RecipeInstructionUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    step?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    text?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    imageUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => RecipeUpdateOneWithoutInstructionsInput, {nullable:true})
    recipe?: RecipeUpdateOneWithoutInstructionsInput;
}
