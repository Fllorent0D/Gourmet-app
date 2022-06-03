import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RecipeIngredientCount {

    @Field(() => Int, {nullable:false})
    recipesIngredients?: number;
}
