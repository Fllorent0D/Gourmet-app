import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RecipeInstructionCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    step?: true;

    @Field(() => Boolean, {nullable:true})
    text?: true;

    @Field(() => Boolean, {nullable:true})
    imageUrl?: true;

    @Field(() => Boolean, {nullable:true})
    thumbnailUrl?: true;

    @Field(() => Boolean, {nullable:true})
    recipeId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
