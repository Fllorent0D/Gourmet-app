import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeInstructionUncheckedCreateNestedManyWithoutRecipeInput } from '../recipe-instruction/recipe-instruction-unchecked-create-nested-many-without-recipe.input';
import { RecipeIngredientsUncheckedCreateNestedManyWithoutRecipeInput } from '../recipe-ingredients/recipe-ingredients-unchecked-create-nested-many-without-recipe.input';

@InputType()
export class RecipeUncheckedCreateWithoutNutritionInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => RecipeInstructionUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    instructions?: RecipeInstructionUncheckedCreateNestedManyWithoutRecipeInput;

    @Field(() => RecipeIngredientsUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    ingredients?: RecipeIngredientsUncheckedCreateNestedManyWithoutRecipeInput;

    @Field(() => String, {nullable:false})
    suitableForDiet!: string;

    @Field(() => Int, {nullable:true})
    recipeNutritionId?: number;
}
