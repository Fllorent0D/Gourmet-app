import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientsCreateWithoutRecipeInput } from './recipe-ingredients-create-without-recipe.input';
import { Type } from 'class-transformer';
import { RecipeIngredientsCreateOrConnectWithoutRecipeInput } from './recipe-ingredients-create-or-connect-without-recipe.input';
import { RecipeIngredientsUpsertWithWhereUniqueWithoutRecipeInput } from './recipe-ingredients-upsert-with-where-unique-without-recipe.input';
import { RecipeIngredientsWhereUniqueInput } from './recipe-ingredients-where-unique.input';
import { RecipeIngredientsUpdateWithWhereUniqueWithoutRecipeInput } from './recipe-ingredients-update-with-where-unique-without-recipe.input';
import { RecipeIngredientsUpdateManyWithWhereWithoutRecipeInput } from './recipe-ingredients-update-many-with-where-without-recipe.input';
import { RecipeIngredientsScalarWhereInput } from './recipe-ingredients-scalar-where.input';

@InputType()
export class RecipeIngredientsUncheckedUpdateManyWithoutRecipeInput {

    @Field(() => [RecipeIngredientsCreateWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeIngredientsCreateWithoutRecipeInput)
    create?: Array<RecipeIngredientsCreateWithoutRecipeInput>;

    @Field(() => [RecipeIngredientsCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeIngredientsCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<RecipeIngredientsCreateOrConnectWithoutRecipeInput>;

    @Field(() => [RecipeIngredientsUpsertWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeIngredientsUpsertWithWhereUniqueWithoutRecipeInput)
    upsert?: Array<RecipeIngredientsUpsertWithWhereUniqueWithoutRecipeInput>;

    @Field(() => [RecipeIngredientsWhereUniqueInput], {nullable:true})
    @Type(() => RecipeIngredientsWhereUniqueInput)
    set?: Array<RecipeIngredientsWhereUniqueInput>;

    @Field(() => [RecipeIngredientsWhereUniqueInput], {nullable:true})
    @Type(() => RecipeIngredientsWhereUniqueInput)
    disconnect?: Array<RecipeIngredientsWhereUniqueInput>;

    @Field(() => [RecipeIngredientsWhereUniqueInput], {nullable:true})
    @Type(() => RecipeIngredientsWhereUniqueInput)
    delete?: Array<RecipeIngredientsWhereUniqueInput>;

    @Field(() => [RecipeIngredientsWhereUniqueInput], {nullable:true})
    @Type(() => RecipeIngredientsWhereUniqueInput)
    connect?: Array<RecipeIngredientsWhereUniqueInput>;

    @Field(() => [RecipeIngredientsUpdateWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeIngredientsUpdateWithWhereUniqueWithoutRecipeInput)
    update?: Array<RecipeIngredientsUpdateWithWhereUniqueWithoutRecipeInput>;

    @Field(() => [RecipeIngredientsUpdateManyWithWhereWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeIngredientsUpdateManyWithWhereWithoutRecipeInput)
    updateMany?: Array<RecipeIngredientsUpdateManyWithWhereWithoutRecipeInput>;

    @Field(() => [RecipeIngredientsScalarWhereInput], {nullable:true})
    @Type(() => RecipeIngredientsScalarWhereInput)
    deleteMany?: Array<RecipeIngredientsScalarWhereInput>;
}
