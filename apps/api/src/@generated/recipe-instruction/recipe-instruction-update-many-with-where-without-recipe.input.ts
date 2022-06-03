import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeInstructionScalarWhereInput } from './recipe-instruction-scalar-where.input';
import { Type } from 'class-transformer';
import { RecipeInstructionUpdateManyMutationInput } from './recipe-instruction-update-many-mutation.input';

@InputType()
export class RecipeInstructionUpdateManyWithWhereWithoutRecipeInput {

    @Field(() => RecipeInstructionScalarWhereInput, {nullable:false})
    @Type(() => RecipeInstructionScalarWhereInput)
    where!: RecipeInstructionScalarWhereInput;

    @Field(() => RecipeInstructionUpdateManyMutationInput, {nullable:false})
    @Type(() => RecipeInstructionUpdateManyMutationInput)
    data!: RecipeInstructionUpdateManyMutationInput;
}
