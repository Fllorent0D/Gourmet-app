import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeNutritionCountAggregate } from './recipe-nutrition-count-aggregate.output';
import { RecipeNutritionAvgAggregate } from './recipe-nutrition-avg-aggregate.output';
import { RecipeNutritionSumAggregate } from './recipe-nutrition-sum-aggregate.output';
import { RecipeNutritionMinAggregate } from './recipe-nutrition-min-aggregate.output';
import { RecipeNutritionMaxAggregate } from './recipe-nutrition-max-aggregate.output';

@ObjectType()
export class RecipeNutritionGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

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

    @Field(() => Int, {nullable:true})
    recipeId?: number;

    @Field(() => RecipeNutritionCountAggregate, {nullable:true})
    _count?: RecipeNutritionCountAggregate;

    @Field(() => RecipeNutritionAvgAggregate, {nullable:true})
    _avg?: RecipeNutritionAvgAggregate;

    @Field(() => RecipeNutritionSumAggregate, {nullable:true})
    _sum?: RecipeNutritionSumAggregate;

    @Field(() => RecipeNutritionMinAggregate, {nullable:true})
    _min?: RecipeNutritionMinAggregate;

    @Field(() => RecipeNutritionMaxAggregate, {nullable:true})
    _max?: RecipeNutritionMaxAggregate;
}
