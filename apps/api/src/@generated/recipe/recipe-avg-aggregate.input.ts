import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RecipeAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    yield?: true;

    @Field(() => Boolean, {nullable:true})
    recipeNutritionId?: true;
}
