import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientCreateWithoutRecipesIngredientsInput } from './recipe-ingredient-create-without-recipes-ingredients.input';
import { Type } from 'class-transformer';
import { RecipeIngredientCreateOrConnectWithoutRecipesIngredientsInput } from './recipe-ingredient-create-or-connect-without-recipes-ingredients.input';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';

@InputType()
export class RecipeIngredientCreateNestedOneWithoutRecipesIngredientsInput {

    @Field(() => RecipeIngredientCreateWithoutRecipesIngredientsInput, {nullable:true})
    @Type(() => RecipeIngredientCreateWithoutRecipesIngredientsInput)
    create?: RecipeIngredientCreateWithoutRecipesIngredientsInput;

    @Field(() => RecipeIngredientCreateOrConnectWithoutRecipesIngredientsInput, {nullable:true})
    @Type(() => RecipeIngredientCreateOrConnectWithoutRecipesIngredientsInput)
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutRecipesIngredientsInput;

    @Field(() => RecipeIngredientWhereUniqueInput, {nullable:true})
    @Type(() => RecipeIngredientWhereUniqueInput)
    connect?: RecipeIngredientWhereUniqueInput;
}
