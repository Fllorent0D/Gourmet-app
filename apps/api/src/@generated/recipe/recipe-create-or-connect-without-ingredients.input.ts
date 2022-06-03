import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutIngredientsInput } from './recipe-create-without-ingredients.input';

@InputType()
export class RecipeCreateOrConnectWithoutIngredientsInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: RecipeWhereUniqueInput;

    @Field(() => RecipeCreateWithoutIngredientsInput, {nullable:false})
    @Type(() => RecipeCreateWithoutIngredientsInput)
    create!: RecipeCreateWithoutIngredientsInput;
}
