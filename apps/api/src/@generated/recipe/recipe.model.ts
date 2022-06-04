import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeNutrition } from '../recipe-nutrition/recipe-nutrition.model';
import { RecipeInstruction } from '../recipe-instruction/recipe-instruction.model';
import { RecipeIngredients } from '../recipe-ingredients/recipe-ingredients.model';
import { RecipeCount } from './recipe-count.output';

@ObjectType()
export class Recipe {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    author!: string | null;

    @Field(() => String, {nullable:true})
    imageUrl!: string | null;

    @Field(() => String, {nullable:true})
    thumbnailUrl!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    recipeCategory!: string | null;

    @Field(() => String, {nullable:true})
    recipeCuisine!: string | null;

    @Field(() => Int, {nullable:true})
    yield!: number | null;

    @Field(() => String, {nullable:true})
    prepTime!: string | null;

    @Field(() => String, {nullable:true})
    cookTime!: string | null;

    @Field(() => String, {nullable:true})
    totalTime!: string | null;

    @Field(() => RecipeNutrition, {nullable:true})
    nutrition?: RecipeNutrition | null;

    @Field(() => [RecipeInstruction], {nullable:true})
    instructions?: Array<RecipeInstruction>;

    @Field(() => [RecipeIngredients], {nullable:true})
    ingredients?: Array<RecipeIngredients>;

    @Field(() => String, {nullable:true})
    suitableForDiet!: string | null;

    @Field(() => Int, {nullable:true})
    recipeNutritionId!: number | null;

    @Field(() => RecipeCount, {nullable:false})
    _count?: RecipeCount;
}
