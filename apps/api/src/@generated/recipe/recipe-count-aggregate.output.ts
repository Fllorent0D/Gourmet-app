import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RecipeCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    author!: number;

    @Field(() => Int, {nullable:false})
    imageUrl!: number;

    @Field(() => Int, {nullable:false})
    thumbnailUrl!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    recipeCategory!: number;

    @Field(() => Int, {nullable:false})
    recipeCuisine!: number;

    @Field(() => Int, {nullable:false})
    yield!: number;

    @Field(() => Int, {nullable:false})
    prepTime!: number;

    @Field(() => Int, {nullable:false})
    cookTime!: number;

    @Field(() => Int, {nullable:false})
    totalTime!: number;

    @Field(() => Int, {nullable:false})
    suitableForDiet!: number;

    @Field(() => Int, {nullable:false})
    recipeNutritionId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
