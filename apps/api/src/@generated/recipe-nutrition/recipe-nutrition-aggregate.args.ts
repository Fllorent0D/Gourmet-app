import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeNutritionWhereInput } from './recipe-nutrition-where.input';
import { Type } from 'class-transformer';
import { RecipeNutritionOrderByWithRelationInput } from './recipe-nutrition-order-by-with-relation.input';
import { RecipeNutritionWhereUniqueInput } from './recipe-nutrition-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RecipeNutritionCountAggregateInput } from './recipe-nutrition-count-aggregate.input';
import { RecipeNutritionAvgAggregateInput } from './recipe-nutrition-avg-aggregate.input';
import { RecipeNutritionSumAggregateInput } from './recipe-nutrition-sum-aggregate.input';
import { RecipeNutritionMinAggregateInput } from './recipe-nutrition-min-aggregate.input';
import { RecipeNutritionMaxAggregateInput } from './recipe-nutrition-max-aggregate.input';

@ArgsType()
export class RecipeNutritionAggregateArgs {

    @Field(() => RecipeNutritionWhereInput, {nullable:true})
    @Type(() => RecipeNutritionWhereInput)
    where?: RecipeNutritionWhereInput;

    @Field(() => [RecipeNutritionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RecipeNutritionOrderByWithRelationInput>;

    @Field(() => RecipeNutritionWhereUniqueInput, {nullable:true})
    cursor?: RecipeNutritionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RecipeNutritionCountAggregateInput, {nullable:true})
    _count?: RecipeNutritionCountAggregateInput;

    @Field(() => RecipeNutritionAvgAggregateInput, {nullable:true})
    _avg?: RecipeNutritionAvgAggregateInput;

    @Field(() => RecipeNutritionSumAggregateInput, {nullable:true})
    _sum?: RecipeNutritionSumAggregateInput;

    @Field(() => RecipeNutritionMinAggregateInput, {nullable:true})
    _min?: RecipeNutritionMinAggregateInput;

    @Field(() => RecipeNutritionMaxAggregateInput, {nullable:true})
    _max?: RecipeNutritionMaxAggregateInput;
}
