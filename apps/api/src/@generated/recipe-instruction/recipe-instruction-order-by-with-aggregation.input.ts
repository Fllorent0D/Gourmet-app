import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RecipeInstructionCountOrderByAggregateInput } from './recipe-instruction-count-order-by-aggregate.input';
import { RecipeInstructionAvgOrderByAggregateInput } from './recipe-instruction-avg-order-by-aggregate.input';
import { RecipeInstructionMaxOrderByAggregateInput } from './recipe-instruction-max-order-by-aggregate.input';
import { RecipeInstructionMinOrderByAggregateInput } from './recipe-instruction-min-order-by-aggregate.input';
import { RecipeInstructionSumOrderByAggregateInput } from './recipe-instruction-sum-order-by-aggregate.input';

@InputType()
export class RecipeInstructionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    step?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imageUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    thumbnailUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    recipeId?: keyof typeof SortOrder;

    @Field(() => RecipeInstructionCountOrderByAggregateInput, {nullable:true})
    _count?: RecipeInstructionCountOrderByAggregateInput;

    @Field(() => RecipeInstructionAvgOrderByAggregateInput, {nullable:true})
    _avg?: RecipeInstructionAvgOrderByAggregateInput;

    @Field(() => RecipeInstructionMaxOrderByAggregateInput, {nullable:true})
    _max?: RecipeInstructionMaxOrderByAggregateInput;

    @Field(() => RecipeInstructionMinOrderByAggregateInput, {nullable:true})
    _min?: RecipeInstructionMinOrderByAggregateInput;

    @Field(() => RecipeInstructionSumOrderByAggregateInput, {nullable:true})
    _sum?: RecipeInstructionSumOrderByAggregateInput;
}
