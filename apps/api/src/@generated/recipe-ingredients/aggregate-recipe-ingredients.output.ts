import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RecipeIngredientsCountAggregate } from './recipe-ingredients-count-aggregate.output';
import { RecipeIngredientsMinAggregate } from './recipe-ingredients-min-aggregate.output';
import { RecipeIngredientsMaxAggregate } from './recipe-ingredients-max-aggregate.output';

@ObjectType()
export class AggregateRecipeIngredients {

    @Field(() => RecipeIngredientsCountAggregate, {nullable:true})
    _count?: RecipeIngredientsCountAggregate;

    @Field(() => RecipeIngredientsMinAggregate, {nullable:true})
    _min?: RecipeIngredientsMinAggregate;

    @Field(() => RecipeIngredientsMaxAggregate, {nullable:true})
    _max?: RecipeIngredientsMaxAggregate;
}
