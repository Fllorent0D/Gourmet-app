import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientsWhereUniqueInput } from './recipe-ingredients-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeIngredientsCreateWithoutRecipeInput } from './recipe-ingredients-create-without-recipe.input';

@InputType()
export class RecipeIngredientsCreateOrConnectWithoutRecipeInput {

    @Field(() => RecipeIngredientsWhereUniqueInput, {nullable:false})
    @Type(() => RecipeIngredientsWhereUniqueInput)
    where!: RecipeIngredientsWhereUniqueInput;

    @Field(() => RecipeIngredientsCreateWithoutRecipeInput, {nullable:false})
    @Type(() => RecipeIngredientsCreateWithoutRecipeInput)
    create!: RecipeIngredientsCreateWithoutRecipeInput;
}
