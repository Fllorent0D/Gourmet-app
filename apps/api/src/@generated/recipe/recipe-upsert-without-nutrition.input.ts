import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUpdateWithoutNutritionInput } from './recipe-update-without-nutrition.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutNutritionInput } from './recipe-create-without-nutrition.input';

@InputType()
export class RecipeUpsertWithoutNutritionInput {

    @Field(() => RecipeUpdateWithoutNutritionInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutNutritionInput)
    update!: RecipeUpdateWithoutNutritionInput;

    @Field(() => RecipeCreateWithoutNutritionInput, {nullable:false})
    @Type(() => RecipeCreateWithoutNutritionInput)
    create!: RecipeCreateWithoutNutritionInput;
}
