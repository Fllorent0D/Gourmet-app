import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeIngredientsWhereUniqueInput } from './recipe-ingredients-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeIngredientsCreateInput } from './recipe-ingredients-create.input';
import { RecipeIngredientsUpdateInput } from './recipe-ingredients-update.input';

@ArgsType()
export class UpsertOneRecipeIngredientsArgs {

    @Field(() => RecipeIngredientsWhereUniqueInput, {nullable:false})
    @Type(() => RecipeIngredientsWhereUniqueInput)
    where!: RecipeIngredientsWhereUniqueInput;

    @Field(() => RecipeIngredientsCreateInput, {nullable:false})
    @Type(() => RecipeIngredientsCreateInput)
    create!: RecipeIngredientsCreateInput;

    @Field(() => RecipeIngredientsUpdateInput, {nullable:false})
    @Type(() => RecipeIngredientsUpdateInput)
    update!: RecipeIngredientsUpdateInput;
}
