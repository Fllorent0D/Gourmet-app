import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RecipeNutritionOrderByWithRelationInput } from '../recipe-nutrition/recipe-nutrition-order-by-with-relation.input';
import { RecipeInstructionOrderByRelationAggregateInput } from '../recipe-instruction/recipe-instruction-order-by-relation-aggregate.input';
import { RecipeIngredientsOrderByRelationAggregateInput } from '../recipe-ingredients/recipe-ingredients-order-by-relation-aggregate.input';

@InputType()
export class RecipeOrderByWithRelationInput {

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

    @Field(() => RecipeNutritionOrderByWithRelationInput, {nullable:true})
    nutrition?: RecipeNutritionOrderByWithRelationInput;

    @Field(() => RecipeInstructionOrderByRelationAggregateInput, {nullable:true})
    instructions?: RecipeInstructionOrderByRelationAggregateInput;

    @Field(() => RecipeIngredientsOrderByRelationAggregateInput, {nullable:true})
    ingredients?: RecipeIngredientsOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    suitableForDiet?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    recipeNutritionId?: keyof typeof SortOrder;
}
