import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RecipeIngredientsUncheckedCreateWithoutRecipeInput {

    @Field(() => String, {nullable:false})
    ingredientId!: string;
}
