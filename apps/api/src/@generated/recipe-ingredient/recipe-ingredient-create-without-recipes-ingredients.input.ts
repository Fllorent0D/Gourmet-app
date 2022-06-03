import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class RecipeIngredientCreateWithoutRecipesIngredientsInput {

    @Field(() => Int, {nullable:true})
    quantity?: number;

    @Field(() => String, {nullable:true})
    scale?: string;

    @Field(() => String, {nullable:false})
    name!: string;
}
