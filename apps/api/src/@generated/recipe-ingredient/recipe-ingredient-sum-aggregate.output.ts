import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RecipeIngredientSumAggregate {

    @Field(() => Int, {nullable:true})
    quantity?: number;
}
