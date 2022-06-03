import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneRecipeArgs {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: RecipeWhereUniqueInput;
}
