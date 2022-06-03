import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RecipeIngredientCountOrderByAggregateInput } from './recipe-ingredient-count-order-by-aggregate.input';
import { RecipeIngredientAvgOrderByAggregateInput } from './recipe-ingredient-avg-order-by-aggregate.input';
import { RecipeIngredientMaxOrderByAggregateInput } from './recipe-ingredient-max-order-by-aggregate.input';
import { RecipeIngredientMinOrderByAggregateInput } from './recipe-ingredient-min-order-by-aggregate.input';
import { RecipeIngredientSumOrderByAggregateInput } from './recipe-ingredient-sum-order-by-aggregate.input';

@InputType()
export class RecipeIngredientOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    scale?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => RecipeIngredientCountOrderByAggregateInput, {nullable:true})
    _count?: RecipeIngredientCountOrderByAggregateInput;

    @Field(() => RecipeIngredientAvgOrderByAggregateInput, {nullable:true})
    _avg?: RecipeIngredientAvgOrderByAggregateInput;

    @Field(() => RecipeIngredientMaxOrderByAggregateInput, {nullable:true})
    _max?: RecipeIngredientMaxOrderByAggregateInput;

    @Field(() => RecipeIngredientMinOrderByAggregateInput, {nullable:true})
    _min?: RecipeIngredientMinOrderByAggregateInput;

    @Field(() => RecipeIngredientSumOrderByAggregateInput, {nullable:true})
    _sum?: RecipeIngredientSumOrderByAggregateInput;
}
