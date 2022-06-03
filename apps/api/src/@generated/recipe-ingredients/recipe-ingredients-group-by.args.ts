import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeIngredientsWhereInput } from './recipe-ingredients-where.input';
import { Type } from 'class-transformer';
import { RecipeIngredientsOrderByWithAggregationInput } from './recipe-ingredients-order-by-with-aggregation.input';
import { RecipeIngredientsScalarFieldEnum } from './recipe-ingredients-scalar-field.enum';
import { RecipeIngredientsScalarWhereWithAggregatesInput } from './recipe-ingredients-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RecipeIngredientsCountAggregateInput } from './recipe-ingredients-count-aggregate.input';
import { RecipeIngredientsAvgAggregateInput } from './recipe-ingredients-avg-aggregate.input';
import { RecipeIngredientsSumAggregateInput } from './recipe-ingredients-sum-aggregate.input';
import { RecipeIngredientsMinAggregateInput } from './recipe-ingredients-min-aggregate.input';
import { RecipeIngredientsMaxAggregateInput } from './recipe-ingredients-max-aggregate.input';

@ArgsType()
export class RecipeIngredientsGroupByArgs {

    @Field(() => RecipeIngredientsWhereInput, {nullable:true})
    @Type(() => RecipeIngredientsWhereInput)
    where?: RecipeIngredientsWhereInput;

    @Field(() => [RecipeIngredientsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RecipeIngredientsOrderByWithAggregationInput>;

    @Field(() => [RecipeIngredientsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof RecipeIngredientsScalarFieldEnum>;

    @Field(() => RecipeIngredientsScalarWhereWithAggregatesInput, {nullable:true})
    having?: RecipeIngredientsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RecipeIngredientsCountAggregateInput, {nullable:true})
    _count?: RecipeIngredientsCountAggregateInput;

    @Field(() => RecipeIngredientsAvgAggregateInput, {nullable:true})
    _avg?: RecipeIngredientsAvgAggregateInput;

    @Field(() => RecipeIngredientsSumAggregateInput, {nullable:true})
    _sum?: RecipeIngredientsSumAggregateInput;

    @Field(() => RecipeIngredientsMinAggregateInput, {nullable:true})
    _min?: RecipeIngredientsMinAggregateInput;

    @Field(() => RecipeIngredientsMaxAggregateInput, {nullable:true})
    _max?: RecipeIngredientsMaxAggregateInput;
}
