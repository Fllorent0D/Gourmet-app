import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeNutritionCreateWithoutRecipeInput } from './recipe-nutrition-create-without-recipe.input';
import { Type } from 'class-transformer';
import { RecipeNutritionCreateOrConnectWithoutRecipeInput } from './recipe-nutrition-create-or-connect-without-recipe.input';
import { RecipeNutritionUpsertWithoutRecipeInput } from './recipe-nutrition-upsert-without-recipe.input';
import { RecipeNutritionWhereUniqueInput } from './recipe-nutrition-where-unique.input';
import { RecipeNutritionUpdateWithoutRecipeInput } from './recipe-nutrition-update-without-recipe.input';

@InputType()
export class RecipeNutritionUncheckedUpdateOneWithoutRecipeInput {

    @Field(() => RecipeNutritionCreateWithoutRecipeInput, {nullable:true})
    @Type(() => RecipeNutritionCreateWithoutRecipeInput)
    create?: RecipeNutritionCreateWithoutRecipeInput;

    @Field(() => RecipeNutritionCreateOrConnectWithoutRecipeInput, {nullable:true})
    @Type(() => RecipeNutritionCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: RecipeNutritionCreateOrConnectWithoutRecipeInput;

    @Field(() => RecipeNutritionUpsertWithoutRecipeInput, {nullable:true})
    @Type(() => RecipeNutritionUpsertWithoutRecipeInput)
    upsert?: RecipeNutritionUpsertWithoutRecipeInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => RecipeNutritionWhereUniqueInput, {nullable:true})
    @Type(() => RecipeNutritionWhereUniqueInput)
    connect?: RecipeNutritionWhereUniqueInput;

    @Field(() => RecipeNutritionUpdateWithoutRecipeInput, {nullable:true})
    @Type(() => RecipeNutritionUpdateWithoutRecipeInput)
    update?: RecipeNutritionUpdateWithoutRecipeInput;
}
