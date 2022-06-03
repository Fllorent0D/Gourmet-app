import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeIngredientUpdateWithoutRecipeInput } from './recipe-ingredient-update-without-recipe.input';

@InputType()
export class RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput {

    @Field(() => RecipeIngredientWhereUniqueInput, {nullable:false})
    @Type(() => RecipeIngredientWhereUniqueInput)
    where!: RecipeIngredientWhereUniqueInput;

    @Field(() => RecipeIngredientUpdateWithoutRecipeInput, {nullable:false})
    @Type(() => RecipeIngredientUpdateWithoutRecipeInput)
    data!: RecipeIngredientUpdateWithoutRecipeInput;
}
