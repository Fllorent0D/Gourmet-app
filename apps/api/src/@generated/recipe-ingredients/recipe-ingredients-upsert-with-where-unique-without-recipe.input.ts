import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientsWhereUniqueInput } from './recipe-ingredients-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeIngredientsUpdateWithoutRecipeInput } from './recipe-ingredients-update-without-recipe.input';
import { RecipeIngredientsCreateWithoutRecipeInput } from './recipe-ingredients-create-without-recipe.input';

@InputType()
export class RecipeIngredientsUpsertWithWhereUniqueWithoutRecipeInput {

    @Field(() => RecipeIngredientsWhereUniqueInput, {nullable:false})
    @Type(() => RecipeIngredientsWhereUniqueInput)
    where!: RecipeIngredientsWhereUniqueInput;

    @Field(() => RecipeIngredientsUpdateWithoutRecipeInput, {nullable:false})
    @Type(() => RecipeIngredientsUpdateWithoutRecipeInput)
    update!: RecipeIngredientsUpdateWithoutRecipeInput;

    @Field(() => RecipeIngredientsCreateWithoutRecipeInput, {nullable:false})
    @Type(() => RecipeIngredientsCreateWithoutRecipeInput)
    create!: RecipeIngredientsCreateWithoutRecipeInput;
}
