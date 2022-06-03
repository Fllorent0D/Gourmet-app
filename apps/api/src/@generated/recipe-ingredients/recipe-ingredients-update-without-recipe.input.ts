import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientUpdateOneRequiredWithoutRecipesIngredientsInput } from '../recipe-ingredient/recipe-ingredient-update-one-required-without-recipes-ingredients.input';

@InputType()
export class RecipeIngredientsUpdateWithoutRecipeInput {

    @Field(() => RecipeIngredientUpdateOneRequiredWithoutRecipesIngredientsInput, {nullable:true})
    ingredient?: RecipeIngredientUpdateOneRequiredWithoutRecipesIngredientsInput;
}
