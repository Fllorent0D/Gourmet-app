import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class RecipeIngredientsScalarWhereInput {

    @Field(() => [RecipeIngredientsScalarWhereInput], {nullable:true})
    AND?: Array<RecipeIngredientsScalarWhereInput>;

    @Field(() => [RecipeIngredientsScalarWhereInput], {nullable:true})
    OR?: Array<RecipeIngredientsScalarWhereInput>;

    @Field(() => [RecipeIngredientsScalarWhereInput], {nullable:true})
    NOT?: Array<RecipeIngredientsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    recipeId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    ingredientId?: IntFilter;
}
