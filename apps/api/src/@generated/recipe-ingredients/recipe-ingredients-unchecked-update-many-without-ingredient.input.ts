import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientsCreateWithoutIngredientInput } from './recipe-ingredients-create-without-ingredient.input';
import { Type } from 'class-transformer';
import { RecipeIngredientsCreateOrConnectWithoutIngredientInput } from './recipe-ingredients-create-or-connect-without-ingredient.input';
import { RecipeIngredientsUpsertWithWhereUniqueWithoutIngredientInput } from './recipe-ingredients-upsert-with-where-unique-without-ingredient.input';
import { RecipeIngredientsWhereUniqueInput } from './recipe-ingredients-where-unique.input';
import { RecipeIngredientsUpdateWithWhereUniqueWithoutIngredientInput } from './recipe-ingredients-update-with-where-unique-without-ingredient.input';
import { RecipeIngredientsUpdateManyWithWhereWithoutIngredientInput } from './recipe-ingredients-update-many-with-where-without-ingredient.input';
import { RecipeIngredientsScalarWhereInput } from './recipe-ingredients-scalar-where.input';

@InputType()
export class RecipeIngredientsUncheckedUpdateManyWithoutIngredientInput {

    @Field(() => [RecipeIngredientsCreateWithoutIngredientInput], {nullable:true})
    @Type(() => RecipeIngredientsCreateWithoutIngredientInput)
    create?: Array<RecipeIngredientsCreateWithoutIngredientInput>;

    @Field(() => [RecipeIngredientsCreateOrConnectWithoutIngredientInput], {nullable:true})
    @Type(() => RecipeIngredientsCreateOrConnectWithoutIngredientInput)
    connectOrCreate?: Array<RecipeIngredientsCreateOrConnectWithoutIngredientInput>;

    @Field(() => [RecipeIngredientsUpsertWithWhereUniqueWithoutIngredientInput], {nullable:true})
    @Type(() => RecipeIngredientsUpsertWithWhereUniqueWithoutIngredientInput)
    upsert?: Array<RecipeIngredientsUpsertWithWhereUniqueWithoutIngredientInput>;

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

    @Field(() => [RecipeIngredientsUpdateWithWhereUniqueWithoutIngredientInput], {nullable:true})
    @Type(() => RecipeIngredientsUpdateWithWhereUniqueWithoutIngredientInput)
    update?: Array<RecipeIngredientsUpdateWithWhereUniqueWithoutIngredientInput>;

    @Field(() => [RecipeIngredientsUpdateManyWithWhereWithoutIngredientInput], {nullable:true})
    @Type(() => RecipeIngredientsUpdateManyWithWhereWithoutIngredientInput)
    updateMany?: Array<RecipeIngredientsUpdateManyWithWhereWithoutIngredientInput>;

    @Field(() => [RecipeIngredientsScalarWhereInput], {nullable:true})
    @Type(() => RecipeIngredientsScalarWhereInput)
    deleteMany?: Array<RecipeIngredientsScalarWhereInput>;
}
