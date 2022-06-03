import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeIngredientsWhereUniqueInput } from './recipe-ingredients-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueRecipeIngredientsArgs {

    @Field(() => RecipeIngredientsWhereUniqueInput, {nullable:false})
    @Type(() => RecipeIngredientsWhereUniqueInput)
    where!: RecipeIngredientsWhereUniqueInput;
}
