import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class RecipeInstructionAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    step?: keyof typeof SortOrder;
}
