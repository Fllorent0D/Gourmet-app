import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateNestedOneWithoutIngredientsInput } from '../recipe/recipe-create-nested-one-without-ingredients.input';

@InputType()
export class RecipeIngredientsCreateWithoutIngredientInput {

    @Field(() => RecipeCreateNestedOneWithoutIngredientsInput, {nullable:true})
    recipe?: RecipeCreateNestedOneWithoutIngredientsInput;
}
