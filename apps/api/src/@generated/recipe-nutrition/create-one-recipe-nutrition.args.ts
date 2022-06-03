import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeNutritionCreateInput } from './recipe-nutrition-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRecipeNutritionArgs {

    @Field(() => RecipeNutritionCreateInput, {nullable:false})
    @Type(() => RecipeNutritionCreateInput)
    data!: RecipeNutritionCreateInput;
}
