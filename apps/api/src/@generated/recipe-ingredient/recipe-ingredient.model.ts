import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeIngredients } from '../recipe-ingredients/recipe-ingredients.model';
import { RecipeIngredientCount } from './recipe-ingredient-count.output';

@ObjectType()
export class RecipeIngredient {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:true})
    quantity!: number | null;

    @Field(() => String, {nullable:true})
    scale!: string | null;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [RecipeIngredients], {nullable:true})
    recipesIngredients?: Array<RecipeIngredients>;

    @Field(() => RecipeIngredientCount, {nullable:false})
    _count?: RecipeIngredientCount;
}
