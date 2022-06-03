import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientsCreateWithoutIngredientInput } from './recipe-ingredients-create-without-ingredient.input';
import { Type } from 'class-transformer';
import { RecipeIngredientsCreateOrConnectWithoutIngredientInput } from './recipe-ingredients-create-or-connect-without-ingredient.input';
import { RecipeIngredientsWhereUniqueInput } from './recipe-ingredients-where-unique.input';

@InputType()
export class RecipeIngredientsCreateNestedManyWithoutIngredientInput {

    @Field(() => [RecipeIngredientsCreateWithoutIngredientInput], {nullable:true})
    @Type(() => RecipeIngredientsCreateWithoutIngredientInput)
    create?: Array<RecipeIngredientsCreateWithoutIngredientInput>;

    @Field(() => [RecipeIngredientsCreateOrConnectWithoutIngredientInput], {nullable:true})
    @Type(() => RecipeIngredientsCreateOrConnectWithoutIngredientInput)
    connectOrCreate?: Array<RecipeIngredientsCreateOrConnectWithoutIngredientInput>;

    @Field(() => [RecipeIngredientsWhereUniqueInput], {nullable:true})
    @Type(() => RecipeIngredientsWhereUniqueInput)
    connect?: Array<RecipeIngredientsWhereUniqueInput>;
}
