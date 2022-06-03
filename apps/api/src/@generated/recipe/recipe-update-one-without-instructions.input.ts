import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutInstructionsInput } from './recipe-create-without-instructions.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutInstructionsInput } from './recipe-create-or-connect-without-instructions.input';
import { RecipeUpsertWithoutInstructionsInput } from './recipe-upsert-without-instructions.input';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateWithoutInstructionsInput } from './recipe-update-without-instructions.input';

@InputType()
export class RecipeUpdateOneWithoutInstructionsInput {

    @Field(() => RecipeCreateWithoutInstructionsInput, {nullable:true})
    @Type(() => RecipeCreateWithoutInstructionsInput)
    create?: RecipeCreateWithoutInstructionsInput;

    @Field(() => RecipeCreateOrConnectWithoutInstructionsInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutInstructionsInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutInstructionsInput;

    @Field(() => RecipeUpsertWithoutInstructionsInput, {nullable:true})
    @Type(() => RecipeUpsertWithoutInstructionsInput)
    upsert?: RecipeUpsertWithoutInstructionsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: RecipeWhereUniqueInput;

    @Field(() => RecipeUpdateWithoutInstructionsInput, {nullable:true})
    @Type(() => RecipeUpdateWithoutInstructionsInput)
    update?: RecipeUpdateWithoutInstructionsInput;
}
