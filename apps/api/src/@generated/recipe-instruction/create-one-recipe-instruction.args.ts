import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeInstructionCreateInput } from './recipe-instruction-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRecipeInstructionArgs {

    @Field(() => RecipeInstructionCreateInput, {nullable:false})
    @Type(() => RecipeInstructionCreateInput)
    data!: RecipeInstructionCreateInput;
}
