import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class RecipeIngredientScalarWhereWithAggregatesInput {

    @Field(() => [RecipeIngredientScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RecipeIngredientScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeIngredientScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RecipeIngredientScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeIngredientScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RecipeIngredientScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    quantity?: IntNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    scale?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
