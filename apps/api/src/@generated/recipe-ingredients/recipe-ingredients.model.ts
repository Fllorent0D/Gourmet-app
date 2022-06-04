import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Recipe } from '../recipe/recipe.model';
import { RecipeIngredient } from '../recipe-ingredient/recipe-ingredient.model';

@ObjectType()
export class RecipeIngredients {

    @Field(() => String, {nullable:false})
    recipeId!: string;

    @Field(() => Recipe, {nullable:true})
    recipe?: Recipe | null;

    @Field(() => String, {nullable:false})
    ingredientId!: string;

    @Field(() => RecipeIngredient, {nullable:false})
    ingredient?: RecipeIngredient;
}
