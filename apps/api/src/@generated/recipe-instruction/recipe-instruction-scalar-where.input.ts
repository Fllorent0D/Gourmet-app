import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class RecipeInstructionScalarWhereInput {

    @Field(() => [RecipeInstructionScalarWhereInput], {nullable:true})
    AND?: Array<RecipeInstructionScalarWhereInput>;

    @Field(() => [RecipeInstructionScalarWhereInput], {nullable:true})
    OR?: Array<RecipeInstructionScalarWhereInput>;

    @Field(() => [RecipeInstructionScalarWhereInput], {nullable:true})
    NOT?: Array<RecipeInstructionScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    step?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    imageUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    thumbnailUrl?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    recipeId?: IntNullableFilter;
}
