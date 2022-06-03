import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeNutritionCreateWithoutRecipeInput } from './recipe-nutrition-create-without-recipe.input';
import { Type } from 'class-transformer';
import { RecipeNutritionCreateOrConnectWithoutRecipeInput } from './recipe-nutrition-create-or-connect-without-recipe.input';
import { RecipeNutritionWhereUniqueInput } from './recipe-nutrition-where-unique.input';

@InputType()
export class RecipeNutritionCreateNestedOneWithoutRecipeInput {

    @Field(() => RecipeNutritionCreateWithoutRecipeInput, {nullable:true})
    @Type(() => RecipeNutritionCreateWithoutRecipeInput)
    create?: RecipeNutritionCreateWithoutRecipeInput;

    @Field(() => RecipeNutritionCreateOrConnectWithoutRecipeInput, {nullable:true})
    @Type(() => RecipeNutritionCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: RecipeNutritionCreateOrConnectWithoutRecipeInput;

    @Field(() => RecipeNutritionWhereUniqueInput, {nullable:true})
    @Type(() => RecipeNutritionWhereUniqueInput)
    connect?: RecipeNutritionWhereUniqueInput;
}
