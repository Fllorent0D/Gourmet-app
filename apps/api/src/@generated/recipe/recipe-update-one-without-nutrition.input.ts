import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutNutritionInput } from './recipe-create-without-nutrition.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutNutritionInput } from './recipe-create-or-connect-without-nutrition.input';
import { RecipeUpsertWithoutNutritionInput } from './recipe-upsert-without-nutrition.input';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateWithoutNutritionInput } from './recipe-update-without-nutrition.input';

@InputType()
export class RecipeUpdateOneWithoutNutritionInput {

    @Field(() => RecipeCreateWithoutNutritionInput, {nullable:true})
    @Type(() => RecipeCreateWithoutNutritionInput)
    create?: RecipeCreateWithoutNutritionInput;

    @Field(() => RecipeCreateOrConnectWithoutNutritionInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutNutritionInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutNutritionInput;

    @Field(() => RecipeUpsertWithoutNutritionInput, {nullable:true})
    @Type(() => RecipeUpsertWithoutNutritionInput)
    upsert?: RecipeUpsertWithoutNutritionInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: RecipeWhereUniqueInput;

    @Field(() => RecipeUpdateWithoutNutritionInput, {nullable:true})
    @Type(() => RecipeUpdateWithoutNutritionInput)
    update?: RecipeUpdateWithoutNutritionInput;
}
