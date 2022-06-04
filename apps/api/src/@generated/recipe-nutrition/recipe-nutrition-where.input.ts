import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { RecipeRelationFilter } from '../recipe/recipe-relation-filter.input';

@InputType()
export class RecipeNutritionWhereInput {

    @Field(() => [RecipeNutritionWhereInput], {nullable:true})
    AND?: Array<RecipeNutritionWhereInput>;

    @Field(() => [RecipeNutritionWhereInput], {nullable:true})
    OR?: Array<RecipeNutritionWhereInput>;

    @Field(() => [RecipeNutritionWhereInput], {nullable:true})
    NOT?: Array<RecipeNutritionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    calories?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    fatContent?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    saturatedFatContent?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    carbohydrateContent?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    sugarContent?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    proteinContent?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    fiberContent?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    cholesterolContent?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    sodiumContent?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    servingSize?: IntNullableFilter;

    @Field(() => RecipeRelationFilter, {nullable:true})
    recipe?: RecipeRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    recipeId?: StringNullableFilter;
}
