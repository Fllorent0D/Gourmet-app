import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class RecipeIngredientUncheckedCreateWithoutRecipesIngredientsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    quantity?: number;

    @Field(() => String, {nullable:true})
    scale?: string;

    @Field(() => String, {nullable:false})
    name!: string;
}
