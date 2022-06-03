import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeIngredientsUpdateInput } from './recipe-ingredients-update.input';
import { Type } from 'class-transformer';
import { RecipeIngredientsWhereUniqueInput } from './recipe-ingredients-where-unique.input';

@ArgsType()
export class UpdateOneRecipeIngredientsArgs {

    @Field(() => RecipeIngredientsUpdateInput, {nullable:false})
    @Type(() => RecipeIngredientsUpdateInput)
    data!: RecipeIngredientsUpdateInput;

    @Field(() => RecipeIngredientsWhereUniqueInput, {nullable:false})
    @Type(() => RecipeIngredientsWhereUniqueInput)
    where!: RecipeIngredientsWhereUniqueInput;
}
