import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RecipeCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    author?: true;

    @Field(() => Boolean, {nullable:true})
    imageUrl?: true;

    @Field(() => Boolean, {nullable:true})
    thumbnailUrl?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    recipeCategory?: true;

    @Field(() => Boolean, {nullable:true})
    recipeCuisine?: true;

    @Field(() => Boolean, {nullable:true})
    yield?: true;

    @Field(() => Boolean, {nullable:true})
    prepTime?: true;

    @Field(() => Boolean, {nullable:true})
    cookTime?: true;

    @Field(() => Boolean, {nullable:true})
    totalTime?: true;

    @Field(() => Boolean, {nullable:true})
    suitableForDiet?: true;

    @Field(() => Boolean, {nullable:true})
    recipeNutritionId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
