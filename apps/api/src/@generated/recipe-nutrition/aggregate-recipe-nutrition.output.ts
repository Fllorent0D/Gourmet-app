import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RecipeNutritionCountAggregate } from './recipe-nutrition-count-aggregate.output';
import { RecipeNutritionAvgAggregate } from './recipe-nutrition-avg-aggregate.output';
import { RecipeNutritionSumAggregate } from './recipe-nutrition-sum-aggregate.output';
import { RecipeNutritionMinAggregate } from './recipe-nutrition-min-aggregate.output';
import { RecipeNutritionMaxAggregate } from './recipe-nutrition-max-aggregate.output';

@ObjectType()
export class AggregateRecipeNutrition {

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
