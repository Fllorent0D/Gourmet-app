import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RecipeInstructionSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    step?: true;
}
