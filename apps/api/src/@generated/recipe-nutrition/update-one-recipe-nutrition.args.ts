import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeNutritionUpdateInput } from './recipe-nutrition-update.input';
import { Type } from 'class-transformer';
import { RecipeNutritionWhereUniqueInput } from './recipe-nutrition-where-unique.input';

@ArgsType()
export class UpdateOneRecipeNutritionArgs {

    @Field(() => RecipeNutritionUpdateInput, {nullable:false})
    @Type(() => RecipeNutritionUpdateInput)
    data!: RecipeNutritionUpdateInput;

    @Field(() => RecipeNutritionWhereUniqueInput, {nullable:false})
    @Type(() => RecipeNutritionWhereUniqueInput)
    where!: RecipeNutritionWhereUniqueInput;
}
