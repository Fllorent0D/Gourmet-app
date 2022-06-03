import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeInstructionWhereInput } from './recipe-instruction-where.input';
import { Type } from 'class-transformer';
import { RecipeInstructionOrderByWithRelationInput } from './recipe-instruction-order-by-with-relation.input';
import { RecipeInstructionWhereUniqueInput } from './recipe-instruction-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RecipeInstructionCountAggregateInput } from './recipe-instruction-count-aggregate.input';
import { RecipeInstructionAvgAggregateInput } from './recipe-instruction-avg-aggregate.input';
import { RecipeInstructionSumAggregateInput } from './recipe-instruction-sum-aggregate.input';
import { RecipeInstructionMinAggregateInput } from './recipe-instruction-min-aggregate.input';
import { RecipeInstructionMaxAggregateInput } from './recipe-instruction-max-aggregate.input';

@ArgsType()
export class RecipeInstructionAggregateArgs {

    @Field(() => RecipeInstructionWhereInput, {nullable:true})
    @Type(() => RecipeInstructionWhereInput)
    where?: RecipeInstructionWhereInput;

    @Field(() => [RecipeInstructionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RecipeInstructionOrderByWithRelationInput>;

    @Field(() => RecipeInstructionWhereUniqueInput, {nullable:true})
    cursor?: RecipeInstructionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RecipeInstructionCountAggregateInput, {nullable:true})
    _count?: RecipeInstructionCountAggregateInput;

    @Field(() => RecipeInstructionAvgAggregateInput, {nullable:true})
    _avg?: RecipeInstructionAvgAggregateInput;

    @Field(() => RecipeInstructionSumAggregateInput, {nullable:true})
    _sum?: RecipeInstructionSumAggregateInput;

    @Field(() => RecipeInstructionMinAggregateInput, {nullable:true})
    _min?: RecipeInstructionMinAggregateInput;

    @Field(() => RecipeInstructionMaxAggregateInput, {nullable:true})
    _max?: RecipeInstructionMaxAggregateInput;
}
