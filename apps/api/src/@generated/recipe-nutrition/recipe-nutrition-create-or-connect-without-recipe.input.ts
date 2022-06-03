import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeNutritionWhereUniqueInput } from './recipe-nutrition-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeNutritionCreateWithoutRecipeInput } from './recipe-nutrition-create-without-recipe.input';

@InputType()
export class RecipeNutritionCreateOrConnectWithoutRecipeInput {

    @Field(() => RecipeNutritionWhereUniqueInput, {nullable:false})
    @Type(() => RecipeNutritionWhereUniqueInput)
    where!: RecipeNutritionWhereUniqueInput;

    @Field(() => RecipeNutritionCreateWithoutRecipeInput, {nullable:false})
    @Type(() => RecipeNutritionCreateWithoutRecipeInput)
    create!: RecipeNutritionCreateWithoutRecipeInput;
}
