import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeNutritionWhereInput } from './recipe-nutrition-where.input';
import { Type } from 'class-transformer';
import { RecipeNutritionOrderByWithRelationInput } from './recipe-nutrition-order-by-with-relation.input';
import { RecipeNutritionWhereUniqueInput } from './recipe-nutrition-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RecipeNutritionScalarFieldEnum } from './recipe-nutrition-scalar-field.enum';

@ArgsType()
export class FindFirstRecipeNutritionArgs {

    @Field(() => RecipeNutritionWhereInput, {nullable:true})
    @Type(() => RecipeNutritionWhereInput)
    where?: RecipeNutritionWhereInput;

    @Field(() => [RecipeNutritionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RecipeNutritionOrderByWithRelationInput>;

    @Field(() => RecipeNutritionWhereUniqueInput, {nullable:true})
    cursor?: RecipeNutritionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RecipeNutritionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RecipeNutritionScalarFieldEnum>;
}
