import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RecipeInstructionSumAggregate {

    @Field(() => Int, {nullable:true})
    step?: number;
}
