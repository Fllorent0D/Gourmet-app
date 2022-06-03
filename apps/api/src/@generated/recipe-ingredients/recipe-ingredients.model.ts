import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Recipe } from '../recipe/recipe.model';
import { RecipeIngredient } from '../recipe-ingredient/recipe-ingredient.model';

@ObjectType()
export class RecipeIngredients {

    @Field(() => Int, {nullable:false})
    recipeId!: number;

    @Field(() => Recipe, {nullable:true})
    recipe?: Recipe | null;

    @Field(() => Int, {nullable:false})
    ingredientId!: number;

    @Field(() => RecipeIngredient, {nullable:false})
    ingredient?: RecipeIngredient;
}
