import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RecipeNutritionSumAggregate {

    @Field(() => Int, {nullable:true})
    servingSize?: number;
}
