import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueRecipeIngredientArgs {

    @Field(() => RecipeIngredientWhereUniqueInput, {nullable:false})
    @Type(() => RecipeIngredientWhereUniqueInput)
    where!: RecipeIngredientWhereUniqueInput;
}
