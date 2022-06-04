import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RecipeIngredientsUncheckedCreateInput {

    @Field(() => String, {nullable:false})
    recipeId!: string;

    @Field(() => String, {nullable:false})
    ingredientId!: string;
}
