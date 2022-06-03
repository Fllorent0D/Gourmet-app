import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeNutritionUpdateManyMutationInput } from './recipe-nutrition-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RecipeNutritionWhereInput } from './recipe-nutrition-where.input';

@ArgsType()
export class UpdateManyRecipeNutritionArgs {

    @Field(() => RecipeNutritionUpdateManyMutationInput, {nullable:false})
    @Type(() => RecipeNutritionUpdateManyMutationInput)
    data!: RecipeNutritionUpdateManyMutationInput;

    @Field(() => RecipeNutritionWhereInput, {nullable:true})
    @Type(() => RecipeNutritionWhereInput)
    where?: RecipeNutritionWhereInput;
}
