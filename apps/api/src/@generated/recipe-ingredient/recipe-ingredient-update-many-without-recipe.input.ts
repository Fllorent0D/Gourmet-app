import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientCreateWithoutRecipeInput } from './recipe-ingredient-create-without-recipe.input';
import { Type } from 'class-transformer';
import { RecipeIngredientCreateOrConnectWithoutRecipeInput } from './recipe-ingredient-create-or-connect-without-recipe.input';
import { RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput } from './recipe-ingredient-upsert-with-where-unique-without-recipe.input';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';
import { RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput } from './recipe-ingredient-update-with-where-unique-without-recipe.input';
import { RecipeIngredientUpdateManyWithWhereWithoutRecipeInput } from './recipe-ingredient-update-many-with-where-without-recipe.input';
import { RecipeIngredientScalarWhereInput } from './recipe-ingredient-scalar-where.input';

@InputType()
export class RecipeIngredientUpdateManyWithoutRecipeInput {

    @Field(() => [RecipeIngredientCreateWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeIngredientCreateWithoutRecipeInput)
    create?: Array<RecipeIngredientCreateWithoutRecipeInput>;

    @Field(() => [RecipeIngredientCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeIngredientCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<RecipeIngredientCreateOrConnectWithoutRecipeInput>;

    @Field(() => [RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput)
    upsert?: Array<RecipeIngredientUpsertWithWhereUniqueWithoutRecipeInput>;

    @Field(() => [RecipeIngredientWhereUniqueInput], {nullable:true})
    @Type(() => RecipeIngredientWhereUniqueInput)
    set?: Array<RecipeIngredientWhereUniqueInput>;

    @Field(() => [RecipeIngredientWhereUniqueInput], {nullable:true})
    @Type(() => RecipeIngredientWhereUniqueInput)
    disconnect?: Array<RecipeIngredientWhereUniqueInput>;

    @Field(() => [RecipeIngredientWhereUniqueInput], {nullable:true})
    @Type(() => RecipeIngredientWhereUniqueInput)
    delete?: Array<RecipeIngredientWhereUniqueInput>;

    @Field(() => [RecipeIngredientWhereUniqueInput], {nullable:true})
    @Type(() => RecipeIngredientWhereUniqueInput)
    connect?: Array<RecipeIngredientWhereUniqueInput>;

    @Field(() => [RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput)
    update?: Array<RecipeIngredientUpdateWithWhereUniqueWithoutRecipeInput>;

    @Field(() => [RecipeIngredientUpdateManyWithWhereWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeIngredientUpdateManyWithWhereWithoutRecipeInput)
    updateMany?: Array<RecipeIngredientUpdateManyWithWhereWithoutRecipeInput>;

    @Field(() => [RecipeIngredientScalarWhereInput], {nullable:true})
    @Type(() => RecipeIngredientScalarWhereInput)
    deleteMany?: Array<RecipeIngredientScalarWhereInput>;
}
