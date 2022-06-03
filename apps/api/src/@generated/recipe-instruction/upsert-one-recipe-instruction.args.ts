import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeInstructionWhereUniqueInput } from './recipe-instruction-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeInstructionCreateInput } from './recipe-instruction-create.input';
import { RecipeInstructionUpdateInput } from './recipe-instruction-update.input';

@ArgsType()
export class UpsertOneRecipeInstructionArgs {

    @Field(() => RecipeInstructionWhereUniqueInput, {nullable:false})
    @Type(() => RecipeInstructionWhereUniqueInput)
    where!: RecipeInstructionWhereUniqueInput;

    @Field(() => RecipeInstructionCreateInput, {nullable:false})
    @Type(() => RecipeInstructionCreateInput)
    create!: RecipeInstructionCreateInput;

    @Field(() => RecipeInstructionUpdateInput, {nullable:false})
    @Type(() => RecipeInstructionUpdateInput)
    update!: RecipeInstructionUpdateInput;
}
