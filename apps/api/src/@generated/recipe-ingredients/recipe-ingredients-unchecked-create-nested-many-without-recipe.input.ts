import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientsCreateWithoutRecipeInput } from './recipe-ingredients-create-without-recipe.input';
import { Type } from 'class-transformer';
import { RecipeIngredientsCreateOrConnectWithoutRecipeInput } from './recipe-ingredients-create-or-connect-without-recipe.input';
import { RecipeIngredientsWhereUniqueInput } from './recipe-ingredients-where-unique.input';

@InputType()
export class RecipeIngredientsUncheckedCreateNestedManyWithoutRecipeInput {

    @Field(() => [RecipeIngredientsCreateWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeIngredientsCreateWithoutRecipeInput)
    create?: Array<RecipeIngredientsCreateWithoutRecipeInput>;

    @Field(() => [RecipeIngredientsCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeIngredientsCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<RecipeIngredientsCreateOrConnectWithoutRecipeInput>;

    @Field(() => [RecipeIngredientsWhereUniqueInput], {nullable:true})
    @Type(() => RecipeIngredientsWhereUniqueInput)
    connect?: Array<RecipeIngredientsWhereUniqueInput>;
}
