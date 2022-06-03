import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RecipeIngredientsMaxAggregate {

    @Field(() => Int, {nullable:true})
    recipeId?: number;

    @Field(() => Int, {nullable:true})
    ingredientId?: number;
}
