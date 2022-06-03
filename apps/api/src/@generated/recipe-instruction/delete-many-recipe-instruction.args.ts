import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeInstructionWhereInput } from './recipe-instruction-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyRecipeInstructionArgs {

    @Field(() => RecipeInstructionWhereInput, {nullable:true})
    @Type(() => RecipeInstructionWhereInput)
    where?: RecipeInstructionWhereInput;
}
