import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeInstructionWhereUniqueInput } from './recipe-instruction-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeInstructionCreateWithoutRecipeInput } from './recipe-instruction-create-without-recipe.input';

@InputType()
export class RecipeInstructionCreateOrConnectWithoutRecipeInput {

    @Field(() => RecipeInstructionWhereUniqueInput, {nullable:false})
    @Type(() => RecipeInstructionWhereUniqueInput)
    where!: RecipeInstructionWhereUniqueInput;

    @Field(() => RecipeInstructionCreateWithoutRecipeInput, {nullable:false})
    @Type(() => RecipeInstructionCreateWithoutRecipeInput)
    create!: RecipeInstructionCreateWithoutRecipeInput;
}
