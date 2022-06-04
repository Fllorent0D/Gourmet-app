import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RecipeSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    yield?: true;

    @Field(() => Boolean, {nullable:true})
    recipeNutritionId?: true;
}
