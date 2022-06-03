import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeCreateNestedOneWithoutNutritionInput } from '../recipe/recipe-create-nested-one-without-nutrition.input';

@InputType()
export class RecipeNutritionCreateInput {

    @Field(() => String, {nullable:true})
    calories?: string;

    @Field(() => String, {nullable:true})
    fatContent?: string;

    @Field(() => String, {nullable:true})
    saturatedFatContent?: string;

    @Field(() => String, {nullable:true})
    carbohydrateContent?: string;

    @Field(() => String, {nullable:true})
    sugarContent?: string;

    @Field(() => String, {nullable:true})
    proteinContent?: string;

    @Field(() => String, {nullable:true})
    fiberContent?: string;

    @Field(() => String, {nullable:true})
    cholesterolContent?: string;

    @Field(() => String, {nullable:true})
    sodiumContent?: string;

    @Field(() => Int, {nullable:true})
    servingSize?: number;

    @Field(() => RecipeCreateNestedOneWithoutNutritionInput, {nullable:true})
    recipe?: RecipeCreateNestedOneWithoutNutritionInput;
}
