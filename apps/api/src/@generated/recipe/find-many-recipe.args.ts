import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeWhereInput } from './recipe-where.input';
import { Type } from 'class-transformer';
import { RecipeOrderByWithRelationInput } from './recipe-order-by-with-relation.input';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RecipeScalarFieldEnum } from './recipe-scalar-field.enum';

@ArgsType()
export class FindManyRecipeArgs {

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;

    @Field(() => [RecipeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RecipeOrderByWithRelationInput>;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    cursor?: RecipeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RecipeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RecipeScalarFieldEnum>;
}
