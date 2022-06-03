import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeIngredientsWhereInput } from './recipe-ingredients-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyRecipeIngredientsArgs {

    @Field(() => RecipeIngredientsWhereInput, {nullable:true})
    @Type(() => RecipeIngredientsWhereInput)
    where?: RecipeIngredientsWhereInput;
}
