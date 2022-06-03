import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUpdateOneWithoutIngredientsInput } from '../recipe/recipe-update-one-without-ingredients.input';

@InputType()
export class RecipeIngredientsUpdateWithoutIngredientInput {

    @Field(() => RecipeUpdateOneWithoutIngredientsInput, {nullable:true})
    recipe?: RecipeUpdateOneWithoutIngredientsInput;
}
