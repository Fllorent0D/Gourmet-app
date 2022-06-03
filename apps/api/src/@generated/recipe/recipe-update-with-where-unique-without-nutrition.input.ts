import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeUpdateWithoutNutritionInput } from './recipe-update-without-nutrition.input';

@InputType()
export class RecipeUpdateWithWhereUniqueWithoutNutritionInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: RecipeWhereUniqueInput;

    @Field(() => RecipeUpdateWithoutNutritionInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutNutritionInput)
    data!: RecipeUpdateWithoutNutritionInput;
}
