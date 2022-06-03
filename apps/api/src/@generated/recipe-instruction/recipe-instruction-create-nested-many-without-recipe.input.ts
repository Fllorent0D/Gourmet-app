import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeInstructionCreateWithoutRecipeInput } from './recipe-instruction-create-without-recipe.input';
import { Type } from 'class-transformer';
import { RecipeInstructionCreateOrConnectWithoutRecipeInput } from './recipe-instruction-create-or-connect-without-recipe.input';
import { RecipeInstructionWhereUniqueInput } from './recipe-instruction-where-unique.input';

@InputType()
export class RecipeInstructionCreateNestedManyWithoutRecipeInput {

    @Field(() => [RecipeInstructionCreateWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeInstructionCreateWithoutRecipeInput)
    create?: Array<RecipeInstructionCreateWithoutRecipeInput>;

    @Field(() => [RecipeInstructionCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeInstructionCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<RecipeInstructionCreateOrConnectWithoutRecipeInput>;

    @Field(() => [RecipeInstructionWhereUniqueInput], {nullable:true})
    @Type(() => RecipeInstructionWhereUniqueInput)
    connect?: Array<RecipeInstructionWhereUniqueInput>;
}
