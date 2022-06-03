import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RecipeIngredientsOrderByRelationAggregateInput } from '../recipe-ingredients/recipe-ingredients-order-by-relation-aggregate.input';

@InputType()
export class RecipeIngredientOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    scale?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => RecipeIngredientsOrderByRelationAggregateInput, {nullable:true})
    recipesIngredients?: RecipeIngredientsOrderByRelationAggregateInput;
}
