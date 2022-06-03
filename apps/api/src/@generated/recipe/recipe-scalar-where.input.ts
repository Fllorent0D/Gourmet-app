import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class RecipeScalarWhereInput {

    @Field(() => [RecipeScalarWhereInput], {nullable:true})
    AND?: Array<RecipeScalarWhereInput>;

    @Field(() => [RecipeScalarWhereInput], {nullable:true})
    OR?: Array<RecipeScalarWhereInput>;

    @Field(() => [RecipeScalarWhereInput], {nullable:true})
    NOT?: Array<RecipeScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    author?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    imageUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    thumbnailUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    recipeCategory?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    recipeCuisine?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    yield?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    prepTime?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    cookTime?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    totalTime?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    suitableForDiet?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    recipeNutritionId?: IntNullableFilter;
}
