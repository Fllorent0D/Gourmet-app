import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { RecipeNutritionRelationFilter } from '../recipe-nutrition/recipe-nutrition-relation-filter.input';
import { RecipeInstructionListRelationFilter } from '../recipe-instruction/recipe-instruction-list-relation-filter.input';
import { RecipeIngredientsListRelationFilter } from '../recipe-ingredients/recipe-ingredients-list-relation-filter.input';

@InputType()
export class RecipeWhereInput {

    @Field(() => [RecipeWhereInput], {nullable:true})
    AND?: Array<RecipeWhereInput>;

    @Field(() => [RecipeWhereInput], {nullable:true})
    OR?: Array<RecipeWhereInput>;

    @Field(() => [RecipeWhereInput], {nullable:true})
    NOT?: Array<RecipeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

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

    @Field(() => RecipeNutritionRelationFilter, {nullable:true})
    nutrition?: RecipeNutritionRelationFilter;

    @Field(() => RecipeInstructionListRelationFilter, {nullable:true})
    instructions?: RecipeInstructionListRelationFilter;

    @Field(() => RecipeIngredientsListRelationFilter, {nullable:true})
    ingredients?: RecipeIngredientsListRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    suitableForDiet?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    recipeNutritionId?: IntNullableFilter;
}
