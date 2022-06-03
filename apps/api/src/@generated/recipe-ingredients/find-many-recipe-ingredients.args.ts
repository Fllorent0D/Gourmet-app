import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeIngredientsWhereInput } from './recipe-ingredients-where.input';
import { Type } from 'class-transformer';
import { RecipeIngredientsOrderByWithRelationInput } from './recipe-ingredients-order-by-with-relation.input';
import { RecipeIngredientsWhereUniqueInput } from './recipe-ingredients-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RecipeIngredientsScalarFieldEnum } from './recipe-ingredients-scalar-field.enum';

@ArgsType()
export class FindManyRecipeIngredientsArgs {

    @Field(() => RecipeIngredientsWhereInput, {nullable:true})
    @Type(() => RecipeIngredientsWhereInput)
    where?: RecipeIngredientsWhereInput;

    @Field(() => [RecipeIngredientsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RecipeIngredientsOrderByWithRelationInput>;

    @Field(() => RecipeIngredientsWhereUniqueInput, {nullable:true})
    cursor?: RecipeIngredientsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RecipeIngredientsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RecipeIngredientsScalarFieldEnum>;
}
