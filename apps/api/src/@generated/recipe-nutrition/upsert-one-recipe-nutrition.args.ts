import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeNutritionWhereUniqueInput } from './recipe-nutrition-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeNutritionCreateInput } from './recipe-nutrition-create.input';
import { RecipeNutritionUpdateInput } from './recipe-nutrition-update.input';

@ArgsType()
export class UpsertOneRecipeNutritionArgs {

    @Field(() => RecipeNutritionWhereUniqueInput, {nullable:false})
    @Type(() => RecipeNutritionWhereUniqueInput)
    where!: RecipeNutritionWhereUniqueInput;

    @Field(() => RecipeNutritionCreateInput, {nullable:false})
    @Type(() => RecipeNutritionCreateInput)
    create!: RecipeNutritionCreateInput;

    @Field(() => RecipeNutritionUpdateInput, {nullable:false})
    @Type(() => RecipeNutritionUpdateInput)
    update!: RecipeNutritionUpdateInput;
}
