import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeIngredientUpdateInput } from './recipe-ingredient-update.input';
import { Type } from 'class-transformer';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';

@ArgsType()
export class UpdateOneRecipeIngredientArgs {

    @Field(() => RecipeIngredientUpdateInput, {nullable:false})
    @Type(() => RecipeIngredientUpdateInput)
    data!: RecipeIngredientUpdateInput;

    @Field(() => RecipeIngredientWhereUniqueInput, {nullable:false})
    @Type(() => RecipeIngredientWhereUniqueInput)
    where!: RecipeIngredientWhereUniqueInput;
}
