import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RecipeNutritionCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    calories!: number;

    @Field(() => Int, {nullable:false})
    fatContent!: number;

    @Field(() => Int, {nullable:false})
    saturatedFatContent!: number;

    @Field(() => Int, {nullable:false})
    carbohydrateContent!: number;

    @Field(() => Int, {nullable:false})
    sugarContent!: number;

    @Field(() => Int, {nullable:false})
    proteinContent!: number;

    @Field(() => Int, {nullable:false})
    fiberContent!: number;

    @Field(() => Int, {nullable:false})
    cholesterolContent!: number;

    @Field(() => Int, {nullable:false})
    sodiumContent!: number;

    @Field(() => Int, {nullable:false})
    servingSize!: number;

    @Field(() => Int, {nullable:false})
    recipeId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
