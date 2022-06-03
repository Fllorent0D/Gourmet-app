import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RecipeInstructionCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    step!: number;

    @Field(() => Int, {nullable:false})
    text!: number;

    @Field(() => Int, {nullable:false})
    imageUrl!: number;

    @Field(() => Int, {nullable:false})
    thumbnailUrl!: number;

    @Field(() => Int, {nullable:false})
    recipeId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
