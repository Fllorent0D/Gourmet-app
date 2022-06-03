import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RecipeInstructionCountAggregate } from './recipe-instruction-count-aggregate.output';
import { RecipeInstructionAvgAggregate } from './recipe-instruction-avg-aggregate.output';
import { RecipeInstructionSumAggregate } from './recipe-instruction-sum-aggregate.output';
import { RecipeInstructionMinAggregate } from './recipe-instruction-min-aggregate.output';
import { RecipeInstructionMaxAggregate } from './recipe-instruction-max-aggregate.output';

@ObjectType()
export class AggregateRecipeInstruction {

    @Field(() => RecipeInstructionCountAggregate, {nullable:true})
    _count?: RecipeInstructionCountAggregate;

    @Field(() => RecipeInstructionAvgAggregate, {nullable:true})
    _avg?: RecipeInstructionAvgAggregate;

    @Field(() => RecipeInstructionSumAggregate, {nullable:true})
    _sum?: RecipeInstructionSumAggregate;

    @Field(() => RecipeInstructionMinAggregate, {nullable:true})
    _min?: RecipeInstructionMinAggregate;

    @Field(() => RecipeInstructionMaxAggregate, {nullable:true})
    _max?: RecipeInstructionMaxAggregate;
}
