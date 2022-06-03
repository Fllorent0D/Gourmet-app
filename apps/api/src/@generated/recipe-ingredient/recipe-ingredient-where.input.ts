import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { RecipeIngredientsListRelationFilter } from '../recipe-ingredients/recipe-ingredients-list-relation-filter.input';

@InputType()
export class RecipeIngredientWhereInput {

    @Field(() => [RecipeIngredientWhereInput], {nullable:true})
    AND?: Array<RecipeIngredientWhereInput>;

    @Field(() => [RecipeIngredientWhereInput], {nullable:true})
    OR?: Array<RecipeIngredientWhereInput>;

    @Field(() => [RecipeIngredientWhereInput], {nullable:true})
    NOT?: Array<RecipeIngredientWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    quantity?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    scale?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => RecipeIngredientsListRelationFilter, {nullable:true})
    recipesIngredients?: RecipeIngredientsListRelationFilter;
}
