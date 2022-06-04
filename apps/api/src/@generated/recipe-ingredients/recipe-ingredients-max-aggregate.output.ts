import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RecipeIngredientsMaxAggregate {

    @Field(() => String, {nullable:true})
    recipeId?: string;

    @Field(() => String, {nullable:true})
    ingredientId?: string;
}
