import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class RecipeInstructionAvgAggregate {

    @Field(() => Float, {nullable:true})
    step?: number;
}
