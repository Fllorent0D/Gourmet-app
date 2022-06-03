import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class RecipeInstructionScalarWhereWithAggregatesInput {

    @Field(() => [RecipeInstructionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RecipeInstructionScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeInstructionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RecipeInstructionScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeInstructionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RecipeInstructionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    step?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    text?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    imageUrl?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    thumbnailUrl?: StringNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    recipeId?: IntNullableWithAggregatesFilter;
}
