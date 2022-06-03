import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientCreateNestedOneWithoutRecipesIngredientsInput } from '../recipe-ingredient/recipe-ingredient-create-nested-one-without-recipes-ingredients.input';

@InputType()
export class RecipeIngredientsCreateWithoutRecipeInput {

    @Field(() => RecipeIngredientCreateNestedOneWithoutRecipesIngredientsInput, {nullable:false})
    ingredient!: RecipeIngredientCreateNestedOneWithoutRecipesIngredientsInput;
}
