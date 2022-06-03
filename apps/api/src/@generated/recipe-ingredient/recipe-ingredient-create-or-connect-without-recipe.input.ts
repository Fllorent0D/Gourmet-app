import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeIngredientCreateWithoutRecipeInput } from './recipe-ingredient-create-without-recipe.input';

@InputType()
export class RecipeIngredientCreateOrConnectWithoutRecipeInput {

    @Field(() => RecipeIngredientWhereUniqueInput, {nullable:false})
    @Type(() => RecipeIngredientWhereUniqueInput)
    where!: RecipeIngredientWhereUniqueInput;

    @Field(() => RecipeIngredientCreateWithoutRecipeInput, {nullable:false})
    @Type(() => RecipeIngredientCreateWithoutRecipeInput)
    create!: RecipeIngredientCreateWithoutRecipeInput;
}
