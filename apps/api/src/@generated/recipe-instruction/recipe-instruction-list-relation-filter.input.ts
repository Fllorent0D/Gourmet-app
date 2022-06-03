import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeInstructionWhereInput } from './recipe-instruction-where.input';

@InputType()
export class RecipeInstructionListRelationFilter {

    @Field(() => RecipeInstructionWhereInput, {nullable:true})
    every?: RecipeInstructionWhereInput;

    @Field(() => RecipeInstructionWhereInput, {nullable:true})
    some?: RecipeInstructionWhereInput;

    @Field(() => RecipeInstructionWhereInput, {nullable:true})
    none?: RecipeInstructionWhereInput;
}
