import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeNutritionWhereInput } from './recipe-nutrition-where.input';

@InputType()
export class RecipeNutritionRelationFilter {

    @Field(() => RecipeNutritionWhereInput, {nullable:true})
    is?: RecipeNutritionWhereInput;

    @Field(() => RecipeNutritionWhereInput, {nullable:true})
    isNot?: RecipeNutritionWhereInput;
}
