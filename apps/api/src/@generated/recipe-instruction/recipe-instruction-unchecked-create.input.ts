import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class RecipeInstructionUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    step!: number;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => String, {nullable:true})
    imageUrl?: string;

    @Field(() => String, {nullable:true})
    thumbnailUrl?: string;

    @Field(() => Int, {nullable:true})
    recipeId?: number;
}
