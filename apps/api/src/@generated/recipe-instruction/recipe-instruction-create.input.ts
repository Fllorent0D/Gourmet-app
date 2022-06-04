import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeCreateNestedOneWithoutInstructionsInput } from '../recipe/recipe-create-nested-one-without-instructions.input';

@InputType()
export class RecipeInstructionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    step!: number;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => String, {nullable:true})
    imageUrl?: string;

    @Field(() => String, {nullable:true})
    thumbnailUrl?: string;

    @Field(() => RecipeCreateNestedOneWithoutInstructionsInput, {nullable:true})
    recipe?: RecipeCreateNestedOneWithoutInstructionsInput;
}
