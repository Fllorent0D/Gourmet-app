import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Recipe } from '../recipe/recipe.model';

@ObjectType()
export class RecipeNutrition {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    calories!: string | null;

    @Field(() => String, {nullable:true})
    fatContent!: string | null;

    @Field(() => String, {nullable:true})
    saturatedFatContent!: string | null;

    @Field(() => String, {nullable:true})
    carbohydrateContent!: string | null;

    @Field(() => String, {nullable:true})
    sugarContent!: string | null;

    @Field(() => String, {nullable:true})
    proteinContent!: string | null;

    @Field(() => String, {nullable:true})
    fiberContent!: string | null;

    @Field(() => String, {nullable:true})
    cholesterolContent!: string | null;

    @Field(() => String, {nullable:true})
    sodiumContent!: string | null;

    @Field(() => Int, {nullable:true})
    servingSize!: number | null;

    @Field(() => Recipe, {nullable:true})
    recipe?: Recipe | null;

    @Field(() => String, {nullable:true})
    recipeId!: string | null;
}
