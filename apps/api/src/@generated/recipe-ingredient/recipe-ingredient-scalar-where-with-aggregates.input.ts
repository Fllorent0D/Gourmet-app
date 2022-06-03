import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class RecipeIngredientScalarWhereWithAggregatesInput {

    @Field(() => [RecipeIngredientScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RecipeIngredientScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeIngredientScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RecipeIngredientScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeIngredientScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RecipeIngredientScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    quantity?: IntNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    scale?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
