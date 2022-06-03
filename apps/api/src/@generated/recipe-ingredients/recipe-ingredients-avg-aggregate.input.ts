import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RecipeIngredientsAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    recipeId?: true;

    @Field(() => Boolean, {nullable:true})
    ingredientId?: true;
}
