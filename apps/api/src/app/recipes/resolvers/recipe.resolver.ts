import {Args, Mutation, Parent, Query, ResolveField, Resolver} from "@nestjs/graphql";
import {Recipe} from "../../../@generated/recipe/recipe.model";
import {PrismaService} from "../../shared/db/prisma.service";
import {FindManyRecipeArgs} from "../../../@generated/recipe/find-many-recipe.args";
import {ImportRecipeInputArgs} from "./args/import-recipe-input.args";
import {RecipeImporterService} from "../services/recipe-importer.service";
import {CreateOneRecipeArgs} from "../../../@generated/recipe/create-one-recipe.args";
import {UpdateOneRecipeArgs} from "../../../@generated/recipe/update-one-recipe.args";
import {UpsertOneRecipeArgs} from "../../../@generated/recipe/upsert-one-recipe.args";
import {DeleteOneRecipeArgs} from "../../../@generated/recipe/delete-one-recipe.args";
import {FindManyRecipeInstructionArgs} from "../../../@generated/recipe-instruction/find-many-recipe-instruction.args";
import {RecipeInstruction} from "../../../@generated/recipe-instruction/recipe-instruction.model";
import {UseGuards} from "@nestjs/common";
import {AuthGuard} from "@nestjs/passport";
import {JwtAuthGuard} from "../../shared/auth/jwt-auth.guard";

@Resolver(Recipe)
export class RecipeResolver {
  constructor(
    private readonly primaService: PrismaService,
    private readonly recipeImporterService: RecipeImporterService
  ) {
  }

  @Query(() => Recipe)
  @UseGuards(JwtAuthGuard)
  findRecipe(@Args() findManyRecipeArgs: FindManyRecipeArgs) {
    return this.primaService.recipe.findFirst({...findManyRecipeArgs});
  }

  @Query(() => [Recipe])
  findRecipes(@Args() findManyRecipeArgs: FindManyRecipeArgs) {
    return this.primaService.recipe.findMany({...findManyRecipeArgs});
  }

  @Mutation(() => Recipe)
  async getRecipeFromUrl(@Args() {url}: ImportRecipeInputArgs) {
    return await this.recipeImporterService.getRecipeFromUrl(url);
  }

  @Mutation(() => Recipe)
  async addRecipe(@Args() createOneRecipeArgs: CreateOneRecipeArgs) {
    return await this.primaService.recipe.create(createOneRecipeArgs);
  }

  @Mutation(() => Recipe)
  async updateRecipe(@Args() updateOneRecipeArgs: UpdateOneRecipeArgs) {
    return await this.primaService.recipe.update(updateOneRecipeArgs);
  }

  @Mutation(() => Recipe)
  async upsertRecipe(@Args() upsertOneRecipeArgs: UpsertOneRecipeArgs) {
    return await this.primaService.recipe.upsert(upsertOneRecipeArgs);
  }

  @Mutation(() => Recipe)
  async deleteRecipe(@Args() deleteOneRecipeArgs: DeleteOneRecipeArgs) {
    return await this.primaService.recipe.delete(deleteOneRecipeArgs);
  }

  @ResolveField('instructions')
  async instructions(@Parent() recipe: Recipe, @Args() findInstructions: FindManyRecipeInstructionArgs): Promise<RecipeInstruction[]> {
    if (findInstructions.where) {
      findInstructions.where.recipeId = {equals: recipe.id}
    } else {
      findInstructions.where = {recipeId: {equals: recipe.id}}
    }
    return await this.primaService.recipeInstruction.findMany(findInstructions);
  }

}
