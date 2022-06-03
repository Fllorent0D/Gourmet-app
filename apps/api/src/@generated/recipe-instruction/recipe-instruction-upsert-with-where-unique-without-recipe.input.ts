import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeInstructionWhereUniqueInput } from './recipe-instruction-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeInstructionUpdateWithoutRecipeInput } from './recipe-instruction-update-without-recipe.input';
import { RecipeInstructionCreateWithoutRecipeInput } from './recipe-instruction-create-without-recipe.input';

@InputType()
export class RecipeInstructionUpsertWithWhereUniqueWithoutRecipeInput {

    @Field(() => RecipeInstructionWhereUniqueInput, {nullable:false})
    @Type(() => RecipeInstructionWhereUniqueInput)
    where!: RecipeInstructionWhereUniqueInput;

    @Field(() => RecipeInstructionUpdateWithoutRecipeInput, {nullable:false})
    @Type(() => RecipeInstructionUpdateWithoutRecipeInput)
    update!: RecipeInstructionUpdateWithoutRecipeInput;

    @Field(() => RecipeInstructionCreateWithoutRecipeInput, {nullable:false})
    @Type(() => RecipeInstructionCreateWithoutRecipeInput)
    create!: RecipeInstructionCreateWithoutRecipeInput;
}
