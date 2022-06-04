import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeInstructionCreateNestedManyWithoutRecipeInput } from '../recipe-instruction/recipe-instruction-create-nested-many-without-recipe.input';
import { RecipeIngredientsCreateNestedManyWithoutRecipeInput } from '../recipe-ingredients/recipe-ingredients-create-nested-many-without-recipe.input';

@InputType()
export class RecipeCreateWithoutNutritionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    author?: string;

    @Field(() => String, {nullable:true})
    imageUrl?: string;

    @Field(() => String, {nullable:true})
    thumbnailUrl?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    recipeCategory?: string;

    @Field(() => String, {nullable:true})
    recipeCuisine?: string;

    @Field(() => Int, {nullable:true})
    yield?: number;

    @Field(() => String, {nullable:true})
    prepTime?: string;

    @Field(() => String, {nullable:true})
    cookTime?: string;

    @Field(() => String, {nullable:true})
    totalTime?: string;

    @Field(() => RecipeInstructionCreateNestedManyWithoutRecipeInput, {nullable:true})
    instructions?: RecipeInstructionCreateNestedManyWithoutRecipeInput;

    @Field(() => RecipeIngredientsCreateNestedManyWithoutRecipeInput, {nullable:true})
    ingredients?: RecipeIngredientsCreateNestedManyWithoutRecipeInput;

    @Field(() => String, {nullable:true})
    suitableForDiet?: string;

    @Field(() => Int, {nullable:true})
    recipeNutritionId?: number;
}
