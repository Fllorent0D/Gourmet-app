import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeNutritionWhereUniqueInput } from './recipe-nutrition-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneRecipeNutritionArgs {

    @Field(() => RecipeNutritionWhereUniqueInput, {nullable:false})
    @Type(() => RecipeNutritionWhereUniqueInput)
    where!: RecipeNutritionWhereUniqueInput;
}
