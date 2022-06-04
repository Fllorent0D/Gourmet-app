import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { RecipeRelationFilter } from '../recipe/recipe-relation-filter.input';
import { RecipeIngredientRelationFilter } from '../recipe-ingredient/recipe-ingredient-relation-filter.input';

@InputType()
export class RecipeIngredientsWhereInput {

    @Field(() => [RecipeIngredientsWhereInput], {nullable:true})
    AND?: Array<RecipeIngredientsWhereInput>;

    @Field(() => [RecipeIngredientsWhereInput], {nullable:true})
    OR?: Array<RecipeIngredientsWhereInput>;

    @Field(() => [RecipeIngredientsWhereInput], {nullable:true})
    NOT?: Array<RecipeIngredientsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    recipeId?: StringFilter;

    @Field(() => RecipeRelationFilter, {nullable:true})
    recipe?: RecipeRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    ingredientId?: StringFilter;

    @Field(() => RecipeIngredientRelationFilter, {nullable:true})
    ingredient?: RecipeIngredientRelationFilter;
}
