import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RecipeMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    author?: string;

    @Field(() => String, {nullable:true})
    imageUrl?: string;

    @Field(() => String, {nullable:true})
    thumbnailUrl?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    recipeCategory?: string;

    @Field(() => String, {nullable:true})
    recipeCuisine?: string;

    @Field(() => Int, {nullable:true})
    yield?: number;

    @Field(() => String, {nullable:true})
    prepTime?: string;

    @Field(() => String, {nullable:true})
    cookTime?: string;

    @Field(() => String, {nullable:true})
    totalTime?: string;

    @Field(() => String, {nullable:true})
    suitableForDiet?: string;

    @Field(() => Int, {nullable:true})
    recipeNutritionId?: number;
}
