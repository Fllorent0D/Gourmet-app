import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class RecipeIngredientsMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    recipeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ingredientId?: keyof typeof SortOrder;
}
