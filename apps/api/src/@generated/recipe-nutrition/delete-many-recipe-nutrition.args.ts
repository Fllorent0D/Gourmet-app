import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeNutritionWhereInput } from './recipe-nutrition-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyRecipeNutritionArgs {

    @Field(() => RecipeNutritionWhereInput, {nullable:true})
    @Type(() => RecipeNutritionWhereInput)
    where?: RecipeNutritionWhereInput;
}
