import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeIngredientsUncheckedCreateNestedManyWithoutIngredientInput } from '../recipe-ingredients/recipe-ingredients-unchecked-create-nested-many-without-ingredient.input';

@InputType()
export class RecipeIngredientUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    quantity?: number;

    @Field(() => String, {nullable:true})
    scale?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RecipeIngredientsUncheckedCreateNestedManyWithoutIngredientInput, {nullable:true})
    recipesIngredients?: RecipeIngredientsUncheckedCreateNestedManyWithoutIngredientInput;
}
