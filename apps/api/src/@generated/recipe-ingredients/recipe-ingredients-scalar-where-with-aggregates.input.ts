import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class RecipeIngredientsScalarWhereWithAggregatesInput {

    @Field(() => [RecipeIngredientsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RecipeIngredientsScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeIngredientsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RecipeIngredientsScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeIngredientsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RecipeIngredientsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    recipeId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    ingredientId?: StringWithAggregatesFilter;
}
