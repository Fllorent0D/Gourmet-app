import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeIngredientsCreateInput } from './recipe-ingredients-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRecipeIngredientsArgs {

    @Field(() => RecipeIngredientsCreateInput, {nullable:false})
    @Type(() => RecipeIngredientsCreateInput)
    data!: RecipeIngredientsCreateInput;
}
