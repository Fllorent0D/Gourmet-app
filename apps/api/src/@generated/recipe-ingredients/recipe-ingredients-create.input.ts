import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateNestedOneWithoutIngredientsInput } from '../recipe/recipe-create-nested-one-without-ingredients.input';
import { RecipeIngredientCreateNestedOneWithoutRecipesIngredientsInput } from '../recipe-ingredient/recipe-ingredient-create-nested-one-without-recipes-ingredients.input';

@InputType()
export class RecipeIngredientsCreateInput {

    @Field(() => RecipeCreateNestedOneWithoutIngredientsInput, {nullable:true})
    recipe?: RecipeCreateNestedOneWithoutIngredientsInput;

    @Field(() => RecipeIngredientCreateNestedOneWithoutRecipesIngredientsInput, {nullable:false})
    ingredient!: RecipeIngredientCreateNestedOneWithoutRecipesIngredientsInput;
}
