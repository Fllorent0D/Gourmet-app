import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeIngredientCreateWithoutRecipesIngredientsInput } from './recipe-ingredient-create-without-recipes-ingredients.input';

@InputType()
export class RecipeIngredientCreateOrConnectWithoutRecipesIngredientsInput {

    @Field(() => RecipeIngredientWhereUniqueInput, {nullable:false})
    @Type(() => RecipeIngredientWhereUniqueInput)
    where!: RecipeIngredientWhereUniqueInput;

    @Field(() => RecipeIngredientCreateWithoutRecipesIngredientsInput, {nullable:false})
    @Type(() => RecipeIngredientCreateWithoutRecipesIngredientsInput)
    create!: RecipeIngredientCreateWithoutRecipesIngredientsInput;
}
