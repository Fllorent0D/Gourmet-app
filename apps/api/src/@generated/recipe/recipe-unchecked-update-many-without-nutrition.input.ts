import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutNutritionInput } from './recipe-create-without-nutrition.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutNutritionInput } from './recipe-create-or-connect-without-nutrition.input';
import { RecipeUpsertWithWhereUniqueWithoutNutritionInput } from './recipe-upsert-with-where-unique-without-nutrition.input';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateWithWhereUniqueWithoutNutritionInput } from './recipe-update-with-where-unique-without-nutrition.input';
import { RecipeUpdateManyWithWhereWithoutNutritionInput } from './recipe-update-many-with-where-without-nutrition.input';
import { RecipeScalarWhereInput } from './recipe-scalar-where.input';

@InputType()
export class RecipeUncheckedUpdateManyWithoutNutritionInput {

    @Field(() => [RecipeCreateWithoutNutritionInput], {nullable:true})
    @Type(() => RecipeCreateWithoutNutritionInput)
    create?: Array<RecipeCreateWithoutNutritionInput>;

    @Field(() => [RecipeCreateOrConnectWithoutNutritionInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutNutritionInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutNutritionInput>;

    @Field(() => [RecipeUpsertWithWhereUniqueWithoutNutritionInput], {nullable:true})
    @Type(() => RecipeUpsertWithWhereUniqueWithoutNutritionInput)
    upsert?: Array<RecipeUpsertWithWhereUniqueWithoutNutritionInput>;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    set?: Array<RecipeWhereUniqueInput>;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    disconnect?: Array<RecipeWhereUniqueInput>;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    delete?: Array<RecipeWhereUniqueInput>;

    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Array<RecipeWhereUniqueInput>;

    @Field(() => [RecipeUpdateWithWhereUniqueWithoutNutritionInput], {nullable:true})
    @Type(() => RecipeUpdateWithWhereUniqueWithoutNutritionInput)
    update?: Array<RecipeUpdateWithWhereUniqueWithoutNutritionInput>;

    @Field(() => [RecipeUpdateManyWithWhereWithoutNutritionInput], {nullable:true})
    @Type(() => RecipeUpdateManyWithWhereWithoutNutritionInput)
    updateMany?: Array<RecipeUpdateManyWithWhereWithoutNutritionInput>;

    @Field(() => [RecipeScalarWhereInput], {nullable:true})
    @Type(() => RecipeScalarWhereInput)
    deleteMany?: Array<RecipeScalarWhereInput>;
}
