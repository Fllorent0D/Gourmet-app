import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RecipeIngredientsCountAggregate {

    @Field(() => Int, {nullable:false})
    recipeId!: number;

    @Field(() => Int, {nullable:false})
    ingredientId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
