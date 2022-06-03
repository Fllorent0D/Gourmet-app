import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeInstructionWhereUniqueInput } from './recipe-instruction-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueRecipeInstructionArgs {

    @Field(() => RecipeInstructionWhereUniqueInput, {nullable:false})
    @Type(() => RecipeInstructionWhereUniqueInput)
    where!: RecipeInstructionWhereUniqueInput;
}
