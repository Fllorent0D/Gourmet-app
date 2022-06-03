import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RecipeOrderByWithRelationInput } from '../recipe/recipe-order-by-with-relation.input';
import { RecipeIngredientOrderByWithRelationInput } from '../recipe-ingredient/recipe-ingredient-order-by-with-relation.input';

@InputType()
export class RecipeIngredientsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    recipeId?: keyof typeof SortOrder;

    @Field(() => RecipeOrderByWithRelationInput, {nullable:true})
    recipe?: RecipeOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    ingredientId?: keyof typeof SortOrder;

    @Field(() => RecipeIngredientOrderByWithRelationInput, {nullable:true})
    ingredient?: RecipeIngredientOrderByWithRelationInput;
}
