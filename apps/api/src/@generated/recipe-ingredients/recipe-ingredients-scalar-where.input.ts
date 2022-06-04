import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class RecipeIngredientsScalarWhereInput {

    @Field(() => [RecipeIngredientsScalarWhereInput], {nullable:true})
    AND?: Array<RecipeIngredientsScalarWhereInput>;

    @Field(() => [RecipeIngredientsScalarWhereInput], {nullable:true})
    OR?: Array<RecipeIngredientsScalarWhereInput>;

    @Field(() => [RecipeIngredientsScalarWhereInput], {nullable:true})
    NOT?: Array<RecipeIngredientsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    recipeId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    ingredientId?: StringFilter;
}
