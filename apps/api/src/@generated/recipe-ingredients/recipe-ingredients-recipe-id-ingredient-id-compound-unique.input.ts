import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class RecipeIngredientsRecipeIdIngredientIdCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    recipeId!: number;

    @Field(() => Int, {nullable:false})
    ingredientId!: number;
}
