import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class RecipeNutritionScalarWhereWithAggregatesInput {

    @Field(() => [RecipeNutritionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RecipeNutritionScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeNutritionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RecipeNutritionScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeNutritionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RecipeNutritionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    calories?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    fatContent?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    saturatedFatContent?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    carbohydrateContent?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    sugarContent?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    proteinContent?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    fiberContent?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    cholesterolContent?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    sodiumContent?: StringNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    servingSize?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    recipeId?: IntNullableWithAggregatesFilter;
}
