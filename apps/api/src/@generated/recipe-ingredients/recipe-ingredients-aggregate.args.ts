import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeIngredientsWhereInput } from './recipe-ingredients-where.input';
import { Type } from 'class-transformer';
import { RecipeIngredientsOrderByWithRelationInput } from './recipe-ingredients-order-by-with-relation.input';
import { RecipeIngredientsWhereUniqueInput } from './recipe-ingredients-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RecipeIngredientsCountAggregateInput } from './recipe-ingredients-count-aggregate.input';
import { RecipeIngredientsMinAggregateInput } from './recipe-ingredients-min-aggregate.input';
import { RecipeIngredientsMaxAggregateInput } from './recipe-ingredients-max-aggregate.input';

@ArgsType()
export class RecipeIngredientsAggregateArgs {

    @Field(() => RecipeIngredientsWhereInput, {nullable:true})
    @Type(() => RecipeIngredientsWhereInput)
    where?: RecipeIngredientsWhereInput;

    @Field(() => [RecipeIngredientsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RecipeIngredientsOrderByWithRelationInput>;

    @Field(() => RecipeIngredientsWhereUniqueInput, {nullable:true})
    cursor?: RecipeIngredientsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RecipeIngredientsCountAggregateInput, {nullable:true})
    _count?: RecipeIngredientsCountAggregateInput;

    @Field(() => RecipeIngredientsMinAggregateInput, {nullable:true})
    _min?: RecipeIngredientsMinAggregateInput;

    @Field(() => RecipeIngredientsMaxAggregateInput, {nullable:true})
    _max?: RecipeIngredientsMaxAggregateInput;
}
