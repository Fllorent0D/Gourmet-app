import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeIngredientCreateInput } from './recipe-ingredient-create.input';
import { RecipeIngredientUpdateInput } from './recipe-ingredient-update.input';

@ArgsType()
export class UpsertOneRecipeIngredientArgs {

    @Field(() => RecipeIngredientWhereUniqueInput, {nullable:false})
    @Type(() => RecipeIngredientWhereUniqueInput)
    where!: RecipeIngredientWhereUniqueInput;

    @Field(() => RecipeIngredientCreateInput, {nullable:false})
    @Type(() => RecipeIngredientCreateInput)
    create!: RecipeIngredientCreateInput;

    @Field(() => RecipeIngredientUpdateInput, {nullable:false})
    @Type(() => RecipeIngredientUpdateInput)
    update!: RecipeIngredientUpdateInput;
}
