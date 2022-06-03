import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientCreateWithoutRecipesIngredientsInput } from './recipe-ingredient-create-without-recipes-ingredients.input';
import { Type } from 'class-transformer';
import { RecipeIngredientCreateOrConnectWithoutRecipesIngredientsInput } from './recipe-ingredient-create-or-connect-without-recipes-ingredients.input';
import { RecipeIngredientUpsertWithoutRecipesIngredientsInput } from './recipe-ingredient-upsert-without-recipes-ingredients.input';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';
import { RecipeIngredientUpdateWithoutRecipesIngredientsInput } from './recipe-ingredient-update-without-recipes-ingredients.input';

@InputType()
export class RecipeIngredientUpdateOneRequiredWithoutRecipesIngredientsInput {

    @Field(() => RecipeIngredientCreateWithoutRecipesIngredientsInput, {nullable:true})
    @Type(() => RecipeIngredientCreateWithoutRecipesIngredientsInput)
    create?: RecipeIngredientCreateWithoutRecipesIngredientsInput;

    @Field(() => RecipeIngredientCreateOrConnectWithoutRecipesIngredientsInput, {nullable:true})
    @Type(() => RecipeIngredientCreateOrConnectWithoutRecipesIngredientsInput)
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutRecipesIngredientsInput;

    @Field(() => RecipeIngredientUpsertWithoutRecipesIngredientsInput, {nullable:true})
    @Type(() => RecipeIngredientUpsertWithoutRecipesIngredientsInput)
    upsert?: RecipeIngredientUpsertWithoutRecipesIngredientsInput;

    @Field(() => RecipeIngredientWhereUniqueInput, {nullable:true})
    @Type(() => RecipeIngredientWhereUniqueInput)
    connect?: RecipeIngredientWhereUniqueInput;

    @Field(() => RecipeIngredientUpdateWithoutRecipesIngredientsInput, {nullable:true})
    @Type(() => RecipeIngredientUpdateWithoutRecipesIngredientsInput)
    update?: RecipeIngredientUpdateWithoutRecipesIngredientsInput;
}
