import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RecipeNutritionCountOrderByAggregateInput } from './recipe-nutrition-count-order-by-aggregate.input';
import { RecipeNutritionAvgOrderByAggregateInput } from './recipe-nutrition-avg-order-by-aggregate.input';
import { RecipeNutritionMaxOrderByAggregateInput } from './recipe-nutrition-max-order-by-aggregate.input';
import { RecipeNutritionMinOrderByAggregateInput } from './recipe-nutrition-min-order-by-aggregate.input';
import { RecipeNutritionSumOrderByAggregateInput } from './recipe-nutrition-sum-order-by-aggregate.input';

@InputType()
export class RecipeNutritionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    calories?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fatContent?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    saturatedFatContent?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    carbohydrateContent?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sugarContent?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    proteinContent?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fiberContent?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cholesterolContent?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sodiumContent?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    servingSize?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    recipeId?: keyof typeof SortOrder;

    @Field(() => RecipeNutritionCountOrderByAggregateInput, {nullable:true})
    _count?: RecipeNutritionCountOrderByAggregateInput;

    @Field(() => RecipeNutritionAvgOrderByAggregateInput, {nullable:true})
    _avg?: RecipeNutritionAvgOrderByAggregateInput;

    @Field(() => RecipeNutritionMaxOrderByAggregateInput, {nullable:true})
    _max?: RecipeNutritionMaxOrderByAggregateInput;

    @Field(() => RecipeNutritionMinOrderByAggregateInput, {nullable:true})
    _min?: RecipeNutritionMinOrderByAggregateInput;

    @Field(() => RecipeNutritionSumOrderByAggregateInput, {nullable:true})
    _sum?: RecipeNutritionSumOrderByAggregateInput;
}
