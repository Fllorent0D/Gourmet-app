import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientsWhereInput } from './recipe-ingredients-where.input';

@InputType()
export class RecipeIngredientsListRelationFilter {

    @Field(() => RecipeIngredientsWhereInput, {nullable:true})
    every?: RecipeIngredientsWhereInput;

    @Field(() => RecipeIngredientsWhereInput, {nullable:true})
    some?: RecipeIngredientsWhereInput;

    @Field(() => RecipeIngredientsWhereInput, {nullable:true})
    none?: RecipeIngredientsWhereInput;
}
