import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeUpdateWithoutNutritionInput } from './recipe-update-without-nutrition.input';
import { RecipeCreateWithoutNutritionInput } from './recipe-create-without-nutrition.input';

@InputType()
export class RecipeUpsertWithWhereUniqueWithoutNutritionInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: RecipeWhereUniqueInput;

    @Field(() => RecipeUpdateWithoutNutritionInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutNutritionInput)
    update!: RecipeUpdateWithoutNutritionInput;

    @Field(() => RecipeCreateWithoutNutritionInput, {nullable:false})
    @Type(() => RecipeCreateWithoutNutritionInput)
    create!: RecipeCreateWithoutNutritionInput;
}
