import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutNutritionInput } from './recipe-create-without-nutrition.input';

@InputType()
export class RecipeCreateOrConnectWithoutNutritionInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: RecipeWhereUniqueInput;

    @Field(() => RecipeCreateWithoutNutritionInput, {nullable:false})
    @Type(() => RecipeCreateWithoutNutritionInput)
    create!: RecipeCreateWithoutNutritionInput;
}
