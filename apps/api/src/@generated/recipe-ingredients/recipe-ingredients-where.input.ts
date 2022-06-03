import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
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

    @Field(() => IntFilter, {nullable:true})
    recipeId?: IntFilter;

    @Field(() => RecipeRelationFilter, {nullable:true})
    recipe?: RecipeRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    ingredientId?: IntFilter;

    @Field(() => RecipeIngredientRelationFilter, {nullable:true})
    ingredient?: RecipeIngredientRelationFilter;
}
