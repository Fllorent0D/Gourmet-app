import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class RecipeInstructionScalarWhereWithAggregatesInput {

    @Field(() => [RecipeInstructionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RecipeInstructionScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeInstructionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RecipeInstructionScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeInstructionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RecipeInstructionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    step?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    text?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    imageUrl?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    thumbnailUrl?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    recipeId?: StringNullableWithAggregatesFilter;
}
