import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RecipeIngredientsUncheckedCreateWithoutIngredientInput {

    @Field(() => String, {nullable:false})
    recipeId!: string;
}
