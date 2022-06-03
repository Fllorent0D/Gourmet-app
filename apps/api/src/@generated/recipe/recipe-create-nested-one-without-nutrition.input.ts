import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutNutritionInput } from './recipe-create-without-nutrition.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutNutritionInput } from './recipe-create-or-connect-without-nutrition.input';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';

@InputType()
export class RecipeCreateNestedOneWithoutNutritionInput {

    @Field(() => RecipeCreateWithoutNutritionInput, {nullable:true})
    @Type(() => RecipeCreateWithoutNutritionInput)
    create?: RecipeCreateWithoutNutritionInput;

    @Field(() => RecipeCreateOrConnectWithoutNutritionInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutNutritionInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutNutritionInput;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: RecipeWhereUniqueInput;
}
