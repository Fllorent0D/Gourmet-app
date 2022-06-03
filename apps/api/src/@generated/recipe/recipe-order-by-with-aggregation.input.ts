import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RecipeCountOrderByAggregateInput } from './recipe-count-order-by-aggregate.input';
import { RecipeAvgOrderByAggregateInput } from './recipe-avg-order-by-aggregate.input';
import { RecipeMaxOrderByAggregateInput } from './recipe-max-order-by-aggregate.input';
import { RecipeMinOrderByAggregateInput } from './recipe-min-order-by-aggregate.input';
import { RecipeSumOrderByAggregateInput } from './recipe-sum-order-by-aggregate.input';

@InputType()
export class RecipeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    author?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imageUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    thumbnailUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    recipeCategory?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    recipeCuisine?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    yield?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    prepTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cookTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    suitableForDiet?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    recipeNutritionId?: keyof typeof SortOrder;

    @Field(() => RecipeCountOrderByAggregateInput, {nullable:true})
    _count?: RecipeCountOrderByAggregateInput;

    @Field(() => RecipeAvgOrderByAggregateInput, {nullable:true})
    _avg?: RecipeAvgOrderByAggregateInput;

    @Field(() => RecipeMaxOrderByAggregateInput, {nullable:true})
    _max?: RecipeMaxOrderByAggregateInput;

    @Field(() => RecipeMinOrderByAggregateInput, {nullable:true})
    _min?: RecipeMinOrderByAggregateInput;

    @Field(() => RecipeSumOrderByAggregateInput, {nullable:true})
    _sum?: RecipeSumOrderByAggregateInput;
}
