import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class RecipeIngredientsScalarWhereWithAggregatesInput {

    @Field(() => [RecipeIngredientsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RecipeIngredientsScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeIngredientsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RecipeIngredientsScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeIngredientsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RecipeIngredientsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    recipeId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    ingredientId?: IntWithAggregatesFilter;
}
