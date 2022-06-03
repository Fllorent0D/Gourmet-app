import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientsScalarWhereInput } from './recipe-ingredients-scalar-where.input';
import { Type } from 'class-transformer';
import { RecipeIngredientsUncheckedUpdateManyWithoutRecipesIngredientsInput } from './recipe-ingredients-unchecked-update-many-without-recipes-ingredients.input';

@InputType()
export class RecipeIngredientsUpdateManyWithWhereWithoutIngredientInput {

    @Field(() => RecipeIngredientsScalarWhereInput, {nullable:false})
    @Type(() => RecipeIngredientsScalarWhereInput)
    where!: RecipeIngredientsScalarWhereInput;

    @Field(() => RecipeIngredientsUncheckedUpdateManyWithoutRecipesIngredientsInput, {nullable:false})
    @Type(() => RecipeIngredientsUncheckedUpdateManyWithoutRecipesIngredientsInput)
    data!: RecipeIngredientsUncheckedUpdateManyWithoutRecipesIngredientsInput;
}
