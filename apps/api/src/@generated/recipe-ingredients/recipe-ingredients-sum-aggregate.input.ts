import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RecipeIngredientsSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    recipeId?: true;

    @Field(() => Boolean, {nullable:true})
    ingredientId?: true;
}
