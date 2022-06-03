import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientsWhereUniqueInput } from './recipe-ingredients-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeIngredientsCreateWithoutIngredientInput } from './recipe-ingredients-create-without-ingredient.input';

@InputType()
export class RecipeIngredientsCreateOrConnectWithoutIngredientInput {

    @Field(() => RecipeIngredientsWhereUniqueInput, {nullable:false})
    @Type(() => RecipeIngredientsWhereUniqueInput)
    where!: RecipeIngredientsWhereUniqueInput;

    @Field(() => RecipeIngredientsCreateWithoutIngredientInput, {nullable:false})
    @Type(() => RecipeIngredientsCreateWithoutIngredientInput)
    create!: RecipeIngredientsCreateWithoutIngredientInput;
}
