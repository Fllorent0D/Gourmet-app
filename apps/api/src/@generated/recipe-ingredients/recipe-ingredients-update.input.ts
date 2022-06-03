import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUpdateOneWithoutIngredientsInput } from '../recipe/recipe-update-one-without-ingredients.input';
import { RecipeIngredientUpdateOneRequiredWithoutRecipesIngredientsInput } from '../recipe-ingredient/recipe-ingredient-update-one-required-without-recipes-ingredients.input';

@InputType()
export class RecipeIngredientsUpdateInput {

    @Field(() => RecipeUpdateOneWithoutIngredientsInput, {nullable:true})
    recipe?: RecipeUpdateOneWithoutIngredientsInput;

    @Field(() => RecipeIngredientUpdateOneRequiredWithoutRecipesIngredientsInput, {nullable:true})
    ingredient?: RecipeIngredientUpdateOneRequiredWithoutRecipesIngredientsInput;
}
