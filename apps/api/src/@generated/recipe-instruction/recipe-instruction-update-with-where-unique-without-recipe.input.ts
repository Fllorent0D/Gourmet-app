import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeInstructionWhereUniqueInput } from './recipe-instruction-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeInstructionUpdateWithoutRecipeInput } from './recipe-instruction-update-without-recipe.input';

@InputType()
export class RecipeInstructionUpdateWithWhereUniqueWithoutRecipeInput {

    @Field(() => RecipeInstructionWhereUniqueInput, {nullable:false})
    @Type(() => RecipeInstructionWhereUniqueInput)
    where!: RecipeInstructionWhereUniqueInput;

    @Field(() => RecipeInstructionUpdateWithoutRecipeInput, {nullable:false})
    @Type(() => RecipeInstructionUpdateWithoutRecipeInput)
    data!: RecipeInstructionUpdateWithoutRecipeInput;
}
