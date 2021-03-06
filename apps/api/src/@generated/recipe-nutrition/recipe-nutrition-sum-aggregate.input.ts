import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RecipeNutritionSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    servingSize?: true;
}
