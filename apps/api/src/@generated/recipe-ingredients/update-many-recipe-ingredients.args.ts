import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeIngredientsUncheckedUpdateManyInput } from './recipe-ingredients-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { RecipeIngredientsWhereInput } from './recipe-ingredients-where.input';

@ArgsType()
export class UpdateManyRecipeIngredientsArgs {

    @Field(() => RecipeIngredientsUncheckedUpdateManyInput, {nullable:false})
    @Type(() => RecipeIngredientsUncheckedUpdateManyInput)
    data!: RecipeIngredientsUncheckedUpdateManyInput;

    @Field(() => RecipeIngredientsWhereInput, {nullable:true})
    @Type(() => RecipeIngredientsWhereInput)
    where?: RecipeIngredientsWhereInput;
}
