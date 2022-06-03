import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeInstructionWhereInput } from './recipe-instruction-where.input';
import { Type } from 'class-transformer';
import { RecipeInstructionOrderByWithRelationInput } from './recipe-instruction-order-by-with-relation.input';
import { RecipeInstructionWhereUniqueInput } from './recipe-instruction-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RecipeInstructionScalarFieldEnum } from './recipe-instruction-scalar-field.enum';

@ArgsType()
export class FindFirstRecipeInstructionArgs {

    @Field(() => RecipeInstructionWhereInput, {nullable:true})
    @Type(() => RecipeInstructionWhereInput)
    where?: RecipeInstructionWhereInput;

    @Field(() => [RecipeInstructionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RecipeInstructionOrderByWithRelationInput>;

    @Field(() => RecipeInstructionWhereUniqueInput, {nullable:true})
    cursor?: RecipeInstructionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RecipeInstructionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RecipeInstructionScalarFieldEnum>;
}
