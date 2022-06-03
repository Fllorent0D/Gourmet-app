import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RecipeIngredientsCountOrderByAggregateInput } from './recipe-ingredients-count-order-by-aggregate.input';
import { RecipeIngredientsAvgOrderByAggregateInput } from './recipe-ingredients-avg-order-by-aggregate.input';
import { RecipeIngredientsMaxOrderByAggregateInput } from './recipe-ingredients-max-order-by-aggregate.input';
import { RecipeIngredientsMinOrderByAggregateInput } from './recipe-ingredients-min-order-by-aggregate.input';
import { RecipeIngredientsSumOrderByAggregateInput } from './recipe-ingredients-sum-order-by-aggregate.input';

@InputType()
export class RecipeIngredientsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    recipeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ingredientId?: keyof typeof SortOrder;

    @Field(() => RecipeIngredientsCountOrderByAggregateInput, {nullable:true})
    _count?: RecipeIngredientsCountOrderByAggregateInput;

    @Field(() => RecipeIngredientsAvgOrderByAggregateInput, {nullable:true})
    _avg?: RecipeIngredientsAvgOrderByAggregateInput;

    @Field(() => RecipeIngredientsMaxOrderByAggregateInput, {nullable:true})
    _max?: RecipeIngredientsMaxOrderByAggregateInput;

    @Field(() => RecipeIngredientsMinOrderByAggregateInput, {nullable:true})
    _min?: RecipeIngredientsMinOrderByAggregateInput;

    @Field(() => RecipeIngredientsSumOrderByAggregateInput, {nullable:true})
    _sum?: RecipeIngredientsSumOrderByAggregateInput;
}
