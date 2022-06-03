import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RecipeNutritionCount {

    @Field(() => Int, {nullable:false})
    Recipe?: number;
}
