import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class RecipeIngredientScalarWhereInput {

    @Field(() => [RecipeIngredientScalarWhereInput], {nullable:true})
    AND?: Array<RecipeIngredientScalarWhereInput>;

    @Field(() => [RecipeIngredientScalarWhereInput], {nullable:true})
    OR?: Array<RecipeIngredientScalarWhereInput>;

    @Field(() => [RecipeIngredientScalarWhereInput], {nullable:true})
    NOT?: Array<RecipeIngredientScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    quantity?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    scale?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    recipeId?: IntNullableFilter;
}
