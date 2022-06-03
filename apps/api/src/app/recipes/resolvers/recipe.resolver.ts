import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {Recipe} from "../../../@generated/recipe/recipe.model";
import {PrismaService} from "../../shared/prisma.service";
import {FindManyRecipeArgs} from "../../../@generated/recipe/find-many-recipe.args";
import {ImportRecipeInputArgs} from "./args/import-recipe-input.args";
import {RecipeImporterService} from "../services/recipe-importer.service";

@Resolver(Recipe)
export class RecipeResolver {
  constructor(
    private readonly primaService: PrismaService,
    private readonly recipeImporterService: RecipeImporterService
  ) {
  }

  @Query(() => [Recipe])
  findRecipe(@Args() findManyRecipeArgs: FindManyRecipeArgs) {
    return this.primaService.recipe.findMany(findManyRecipeArgs);
  }

  @Mutation( () => Recipe)
  async getRecipeFromUrl(@Args() {url}: ImportRecipeInputArgs) {
    return await this.recipeImporterService.getRecipeFromUrl(url);
  }


}
