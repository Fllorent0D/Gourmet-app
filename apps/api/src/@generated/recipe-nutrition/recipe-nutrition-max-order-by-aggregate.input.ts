import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class RecipeNutritionMaxOrderByAggregateInput {

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
}
