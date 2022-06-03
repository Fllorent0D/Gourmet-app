import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientsWhereUniqueInput } from './recipe-ingredients-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeIngredientsUpdateWithoutRecipeInput } from './recipe-ingredients-update-without-recipe.input';

@InputType()
export class RecipeIngredientsUpdateWithWhereUniqueWithoutRecipeInput {

    @Field(() => RecipeIngredientsWhereUniqueInput, {nullable:false})
    @Type(() => RecipeIngredientsWhereUniqueInput)
    where!: RecipeIngredientsWhereUniqueInput;

    @Field(() => RecipeIngredientsUpdateWithoutRecipeInput, {nullable:false})
    @Type(() => RecipeIngredientsUpdateWithoutRecipeInput)
    data!: RecipeIngredientsUpdateWithoutRecipeInput;
}
