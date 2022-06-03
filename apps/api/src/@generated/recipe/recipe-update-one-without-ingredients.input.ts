import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutIngredientsInput } from './recipe-create-without-ingredients.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutIngredientsInput } from './recipe-create-or-connect-without-ingredients.input';
import { RecipeUpsertWithoutIngredientsInput } from './recipe-upsert-without-ingredients.input';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateWithoutIngredientsInput } from './recipe-update-without-ingredients.input';

@InputType()
export class RecipeUpdateOneWithoutIngredientsInput {

    @Field(() => RecipeCreateWithoutIngredientsInput, {nullable:true})
    @Type(() => RecipeCreateWithoutIngredientsInput)
    create?: RecipeCreateWithoutIngredientsInput;

    @Field(() => RecipeCreateOrConnectWithoutIngredientsInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutIngredientsInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutIngredientsInput;

    @Field(() => RecipeUpsertWithoutIngredientsInput, {nullable:true})
    @Type(() => RecipeUpsertWithoutIngredientsInput)
    upsert?: RecipeUpsertWithoutIngredientsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: RecipeWhereUniqueInput;

    @Field(() => RecipeUpdateWithoutIngredientsInput, {nullable:true})
    @Type(() => RecipeUpdateWithoutIngredientsInput)
    update?: RecipeUpdateWithoutIngredientsInput;
}
