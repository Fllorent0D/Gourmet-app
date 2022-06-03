import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeIngredientWhereInput } from './recipe-ingredient-where.input';
import { Type } from 'class-transformer';
import { RecipeIngredientOrderByWithRelationInput } from './recipe-ingredient-order-by-with-relation.input';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RecipeIngredientScalarFieldEnum } from './recipe-ingredient-scalar-field.enum';

@ArgsType()
export class FindFirstRecipeIngredientArgs {

    @Field(() => RecipeIngredientWhereInput, {nullable:true})
    @Type(() => RecipeIngredientWhereInput)
    where?: RecipeIngredientWhereInput;

    @Field(() => [RecipeIngredientOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RecipeIngredientOrderByWithRelationInput>;

    @Field(() => RecipeIngredientWhereUniqueInput, {nullable:true})
    cursor?: RecipeIngredientWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RecipeIngredientScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RecipeIngredientScalarFieldEnum>;
}
