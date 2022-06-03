import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeInstructionUpdateInput } from './recipe-instruction-update.input';
import { Type } from 'class-transformer';
import { RecipeInstructionWhereUniqueInput } from './recipe-instruction-where-unique.input';

@ArgsType()
export class UpdateOneRecipeInstructionArgs {

    @Field(() => RecipeInstructionUpdateInput, {nullable:false})
    @Type(() => RecipeInstructionUpdateInput)
    data!: RecipeInstructionUpdateInput;

    @Field(() => RecipeInstructionWhereUniqueInput, {nullable:false})
    @Type(() => RecipeInstructionWhereUniqueInput)
    where!: RecipeInstructionWhereUniqueInput;
}
