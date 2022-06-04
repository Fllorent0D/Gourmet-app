import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Recipe } from '../recipe/recipe.model';

@ObjectType()
export class RecipeInstruction {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    step!: number;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => String, {nullable:true})
    imageUrl!: string | null;

    @Field(() => String, {nullable:true})
    thumbnailUrl!: string | null;

    @Field(() => Recipe, {nullable:true})
    recipe?: Recipe | null;

    @Field(() => String, {nullable:true})
    recipeId!: string | null;
}
