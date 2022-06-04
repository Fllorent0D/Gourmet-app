import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RecipeSumAggregate {

    @Field(() => Int, {nullable:true})
    yield?: number;

    @Field(() => Int, {nullable:true})
    recipeNutritionId?: number;
}
