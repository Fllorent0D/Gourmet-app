import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class RecipeAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    yield?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    recipeNutritionId?: keyof typeof SortOrder;
}
