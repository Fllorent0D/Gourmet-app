import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RecipeNutritionMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    calories?: true;

    @Field(() => Boolean, {nullable:true})
    fatContent?: true;

    @Field(() => Boolean, {nullable:true})
    saturatedFatContent?: true;

    @Field(() => Boolean, {nullable:true})
    carbohydrateContent?: true;

    @Field(() => Boolean, {nullable:true})
    sugarContent?: true;

    @Field(() => Boolean, {nullable:true})
    proteinContent?: true;

    @Field(() => Boolean, {nullable:true})
    fiberContent?: true;

    @Field(() => Boolean, {nullable:true})
    cholesterolContent?: true;

    @Field(() => Boolean, {nullable:true})
    sodiumContent?: true;

    @Field(() => Boolean, {nullable:true})
    servingSize?: true;

    @Field(() => Boolean, {nullable:true})
    recipeId?: true;
}
