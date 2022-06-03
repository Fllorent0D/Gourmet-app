import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientsRecipeIdIngredientIdCompoundUniqueInput } from './recipe-ingredients-recipe-id-ingredient-id-compound-unique.input';

@InputType()
export class RecipeIngredientsWhereUniqueInput {

    @Field(() => RecipeIngredientsRecipeIdIngredientIdCompoundUniqueInput, {nullable:true})
    recipeId_ingredientId?: RecipeIngredientsRecipeIdIngredientIdCompoundUniqueInput;
}
