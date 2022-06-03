import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientUpdateWithoutRecipesIngredientsInput } from './recipe-ingredient-update-without-recipes-ingredients.input';
import { Type } from 'class-transformer';
import { RecipeIngredientCreateWithoutRecipesIngredientsInput } from './recipe-ingredient-create-without-recipes-ingredients.input';

@InputType()
export class RecipeIngredientUpsertWithoutRecipesIngredientsInput {

    @Field(() => RecipeIngredientUpdateWithoutRecipesIngredientsInput, {nullable:false})
    @Type(() => RecipeIngredientUpdateWithoutRecipesIngredientsInput)
    update!: RecipeIngredientUpdateWithoutRecipesIngredientsInput;

    @Field(() => RecipeIngredientCreateWithoutRecipesIngredientsInput, {nullable:false})
    @Type(() => RecipeIngredientCreateWithoutRecipesIngredientsInput)
    create!: RecipeIngredientCreateWithoutRecipesIngredientsInput;
}
