import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class RecipeIngredientsAvgAggregate {

    @Field(() => Float, {nullable:true})
    recipeId?: number;

    @Field(() => Float, {nullable:true})
    ingredientId?: number;
}
