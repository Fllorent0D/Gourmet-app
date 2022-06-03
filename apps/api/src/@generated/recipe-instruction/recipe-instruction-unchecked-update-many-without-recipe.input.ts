import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeInstructionCreateWithoutRecipeInput } from './recipe-instruction-create-without-recipe.input';
import { Type } from 'class-transformer';
import { RecipeInstructionCreateOrConnectWithoutRecipeInput } from './recipe-instruction-create-or-connect-without-recipe.input';
import { RecipeInstructionUpsertWithWhereUniqueWithoutRecipeInput } from './recipe-instruction-upsert-with-where-unique-without-recipe.input';
import { RecipeInstructionWhereUniqueInput } from './recipe-instruction-where-unique.input';
import { RecipeInstructionUpdateWithWhereUniqueWithoutRecipeInput } from './recipe-instruction-update-with-where-unique-without-recipe.input';
import { RecipeInstructionUpdateManyWithWhereWithoutRecipeInput } from './recipe-instruction-update-many-with-where-without-recipe.input';
import { RecipeInstructionScalarWhereInput } from './recipe-instruction-scalar-where.input';

@InputType()
export class RecipeInstructionUncheckedUpdateManyWithoutRecipeInput {

    @Field(() => [RecipeInstructionCreateWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeInstructionCreateWithoutRecipeInput)
    create?: Array<RecipeInstructionCreateWithoutRecipeInput>;

    @Field(() => [RecipeInstructionCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeInstructionCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<RecipeInstructionCreateOrConnectWithoutRecipeInput>;

    @Field(() => [RecipeInstructionUpsertWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeInstructionUpsertWithWhereUniqueWithoutRecipeInput)
    upsert?: Array<RecipeInstructionUpsertWithWhereUniqueWithoutRecipeInput>;

    @Field(() => [RecipeInstructionWhereUniqueInput], {nullable:true})
    @Type(() => RecipeInstructionWhereUniqueInput)
    set?: Array<RecipeInstructionWhereUniqueInput>;

    @Field(() => [RecipeInstructionWhereUniqueInput], {nullable:true})
    @Type(() => RecipeInstructionWhereUniqueInput)
    disconnect?: Array<RecipeInstructionWhereUniqueInput>;

    @Field(() => [RecipeInstructionWhereUniqueInput], {nullable:true})
    @Type(() => RecipeInstructionWhereUniqueInput)
    delete?: Array<RecipeInstructionWhereUniqueInput>;

    @Field(() => [RecipeInstructionWhereUniqueInput], {nullable:true})
    @Type(() => RecipeInstructionWhereUniqueInput)
    connect?: Array<RecipeInstructionWhereUniqueInput>;

    @Field(() => [RecipeInstructionUpdateWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeInstructionUpdateWithWhereUniqueWithoutRecipeInput)
    update?: Array<RecipeInstructionUpdateWithWhereUniqueWithoutRecipeInput>;

    @Field(() => [RecipeInstructionUpdateManyWithWhereWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeInstructionUpdateManyWithWhereWithoutRecipeInput)
    updateMany?: Array<RecipeInstructionUpdateManyWithWhereWithoutRecipeInput>;

    @Field(() => [RecipeInstructionScalarWhereInput], {nullable:true})
    @Type(() => RecipeInstructionScalarWhereInput)
    deleteMany?: Array<RecipeInstructionScalarWhereInput>;
}
