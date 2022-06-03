import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutInstructionsInput } from './recipe-create-without-instructions.input';

@InputType()
export class RecipeCreateOrConnectWithoutInstructionsInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: RecipeWhereUniqueInput;

    @Field(() => RecipeCreateWithoutInstructionsInput, {nullable:false})
    @Type(() => RecipeCreateWithoutInstructionsInput)
    create!: RecipeCreateWithoutInstructionsInput;
}
