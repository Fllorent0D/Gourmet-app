import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientCreateWithoutRecipeInput } from './recipe-ingredient-create-without-recipe.input';
import { Type } from 'class-transformer';
import { RecipeIngredientCreateOrConnectWithoutRecipeInput } from './recipe-ingredient-create-or-connect-without-recipe.input';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';

@InputType()
export class RecipeIngredientUncheckedCreateNestedManyWithoutRecipeInput {

    @Field(() => [RecipeIngredientCreateWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeIngredientCreateWithoutRecipeInput)
    create?: Array<RecipeIngredientCreateWithoutRecipeInput>;

    @Field(() => [RecipeIngredientCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeIngredientCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<RecipeIngredientCreateOrConnectWithoutRecipeInput>;

    @Field(() => [RecipeIngredientWhereUniqueInput], {nullable:true})
    @Type(() => RecipeIngredientWhereUniqueInput)
    connect?: Array<RecipeIngredientWhereUniqueInput>;
}
