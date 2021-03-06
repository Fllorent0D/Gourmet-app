import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class RecipeNutritionAvgAggregate {

    @Field(() => Float, {nullable:true})
    servingSize?: number;
}
