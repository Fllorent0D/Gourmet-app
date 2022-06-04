import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { RecipeRelationFilter } from '../recipe/recipe-relation-filter.input';

@InputType()
export class RecipeInstructionWhereInput {

    @Field(() => [RecipeInstructionWhereInput], {nullable:true})
    AND?: Array<RecipeInstructionWhereInput>;

    @Field(() => [RecipeInstructionWhereInput], {nullable:true})
    OR?: Array<RecipeInstructionWhereInput>;

    @Field(() => [RecipeInstructionWhereInput], {nullable:true})
    NOT?: Array<RecipeInstructionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    step?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    imageUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    thumbnailUrl?: StringNullableFilter;

    @Field(() => RecipeRelationFilter, {nullable:true})
    recipe?: RecipeRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    recipeId?: StringNullableFilter;
}
