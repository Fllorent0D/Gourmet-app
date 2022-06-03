import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeNutritionUpdateWithoutRecipeInput } from './recipe-nutrition-update-without-recipe.input';
import { Type } from 'class-transformer';
import { RecipeNutritionCreateWithoutRecipeInput } from './recipe-nutrition-create-without-recipe.input';

@InputType()
export class RecipeNutritionUpsertWithoutRecipeInput {

    @Field(() => RecipeNutritionUpdateWithoutRecipeInput, {nullable:false})
    @Type(() => RecipeNutritionUpdateWithoutRecipeInput)
    update!: RecipeNutritionUpdateWithoutRecipeInput;

    @Field(() => RecipeNutritionCreateWithoutRecipeInput, {nullable:false})
    @Type(() => RecipeNutritionCreateWithoutRecipeInput)
    create!: RecipeNutritionCreateWithoutRecipeInput;
}
