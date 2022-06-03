import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeIngredientsCountAggregate } from './recipe-ingredients-count-aggregate.output';
import { RecipeIngredientsAvgAggregate } from './recipe-ingredients-avg-aggregate.output';
import { RecipeIngredientsSumAggregate } from './recipe-ingredients-sum-aggregate.output';
import { RecipeIngredientsMinAggregate } from './recipe-ingredients-min-aggregate.output';
import { RecipeIngredientsMaxAggregate } from './recipe-ingredients-max-aggregate.output';

@ObjectType()
export class RecipeIngredientsGroupBy {

    @Field(() => Int, {nullable:false})
    recipeId!: number;

    @Field(() => Int, {nullable:false})
    ingredientId!: number;

    @Field(() => RecipeIngredientsCountAggregate, {nullable:true})
    _count?: RecipeIngredientsCountAggregate;

    @Field(() => RecipeIngredientsAvgAggregate, {nullable:true})
    _avg?: RecipeIngredientsAvgAggregate;

    @Field(() => RecipeIngredientsSumAggregate, {nullable:true})
    _sum?: RecipeIngredientsSumAggregate;

    @Field(() => RecipeIngredientsMinAggregate, {nullable:true})
    _min?: RecipeIngredientsMinAggregate;

    @Field(() => RecipeIngredientsMaxAggregate, {nullable:true})
    _max?: RecipeIngredientsMaxAggregate;
}
