import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientsScalarWhereInput } from './recipe-ingredients-scalar-where.input';
import { Type } from 'class-transformer';
import { RecipeIngredientsUncheckedUpdateManyWithoutIngredientsInput } from './recipe-ingredients-unchecked-update-many-without-ingredients.input';

@InputType()
export class RecipeIngredientsUpdateManyWithWhereWithoutRecipeInput {

    @Field(() => RecipeIngredientsScalarWhereInput, {nullable:false})
    @Type(() => RecipeIngredientsScalarWhereInput)
    where!: RecipeIngredientsScalarWhereInput;

    @Field(() => RecipeIngredientsUncheckedUpdateManyWithoutIngredientsInput, {nullable:false})
    @Type(() => RecipeIngredientsUncheckedUpdateManyWithoutIngredientsInput)
    data!: RecipeIngredientsUncheckedUpdateManyWithoutIngredientsInput;
}
