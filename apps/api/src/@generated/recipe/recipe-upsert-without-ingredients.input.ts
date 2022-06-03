import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUpdateWithoutIngredientsInput } from './recipe-update-without-ingredients.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutIngredientsInput } from './recipe-create-without-ingredients.input';

@InputType()
export class RecipeUpsertWithoutIngredientsInput {

    @Field(() => RecipeUpdateWithoutIngredientsInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutIngredientsInput)
    update!: RecipeUpdateWithoutIngredientsInput;

    @Field(() => RecipeCreateWithoutIngredientsInput, {nullable:false})
    @Type(() => RecipeCreateWithoutIngredientsInput)
    create!: RecipeCreateWithoutIngredientsInput;
}
