import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeInstructionUpdateManyMutationInput } from './recipe-instruction-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RecipeInstructionWhereInput } from './recipe-instruction-where.input';

@ArgsType()
export class UpdateManyRecipeInstructionArgs {

    @Field(() => RecipeInstructionUpdateManyMutationInput, {nullable:false})
    @Type(() => RecipeInstructionUpdateManyMutationInput)
    data!: RecipeInstructionUpdateManyMutationInput;

    @Field(() => RecipeInstructionWhereInput, {nullable:true})
    @Type(() => RecipeInstructionWhereInput)
    where?: RecipeInstructionWhereInput;
}
