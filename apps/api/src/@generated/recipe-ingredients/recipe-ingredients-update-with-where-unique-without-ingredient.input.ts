import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientsWhereUniqueInput } from './recipe-ingredients-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeIngredientsUpdateWithoutIngredientInput } from './recipe-ingredients-update-without-ingredient.input';

@InputType()
export class RecipeIngredientsUpdateWithWhereUniqueWithoutIngredientInput {

    @Field(() => RecipeIngredientsWhereUniqueInput, {nullable:false})
    @Type(() => RecipeIngredientsWhereUniqueInput)
    where!: RecipeIngredientsWhereUniqueInput;

    @Field(() => RecipeIngredientsUpdateWithoutIngredientInput, {nullable:false})
    @Type(() => RecipeIngredientsUpdateWithoutIngredientInput)
    data!: RecipeIngredientsUpdateWithoutIngredientInput;
}
