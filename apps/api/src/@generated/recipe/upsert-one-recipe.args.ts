import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeCreateInput } from './recipe-create.input';
import { RecipeUpdateInput } from './recipe-update.input';

@ArgsType()
export class UpsertOneRecipeArgs {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: RecipeWhereUniqueInput;

    @Field(() => RecipeCreateInput, {nullable:false})
    @Type(() => RecipeCreateInput)
    create!: RecipeCreateInput;

    @Field(() => RecipeUpdateInput, {nullable:false})
    @Type(() => RecipeUpdateInput)
    update!: RecipeUpdateInput;
}
