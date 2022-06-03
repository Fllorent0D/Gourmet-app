import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeIngredientsCreateNestedManyWithoutIngredientInput } from '../recipe-ingredients/recipe-ingredients-create-nested-many-without-ingredient.input';

@InputType()
export class RecipeIngredientCreateInput {

    @Field(() => Int, {nullable:true})
    quantity?: number;

    @Field(() => String, {nullable:true})
    scale?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RecipeIngredientsCreateNestedManyWithoutIngredientInput, {nullable:true})
    recipesIngredients?: RecipeIngredientsCreateNestedManyWithoutIngredientInput;
}
