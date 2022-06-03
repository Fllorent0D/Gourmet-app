import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RecipeIngredientMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    quantity?: true;

    @Field(() => Boolean, {nullable:true})
    scale?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;
}
