import {Recipe} from "../../../@generated/recipe/recipe.model";
import * as schemaDTS from "schema-dts";

export class RecipeSEOMapper {
  static mapRecipeSEOToRecipe(recipeSEO: schemaDTS.WithContext<schemaDTS.Recipe>): Recipe {
    return {
      id: '11111',
      name: RecipeSEOMapper.getNameFromRecipe(recipeSEO),
      author: RecipeSEOMapper.getAuthorFromRecipe(recipeSEO),
      imageUrl: '',
      thumbnailUrl: '',
      description: RecipeSEOMapper.getDescriptionFromRecipe(recipeSEO),
      recipeCategory: RecipeSEOMapper.getCategoryFromRecipe(recipeSEO),
      recipeCuisine: RecipeSEOMapper.getCuisineFromRecipe(recipeSEO),
      yield: RecipeSEOMapper.getYieldFromRecipe(recipeSEO),
      prepTime: RecipeSEOMapper.getPrepTimeFromRecipe(recipeSEO),
      cookTime: RecipeSEOMapper.getCookTimeFromRecipe(recipeSEO),
      totalTime: RecipeSEOMapper.getTotalTimeFromRecipe(recipeSEO),
      ingredients: [],
      instructions: [],
      suitableForDiet: '',
      recipeNutritionId: 4,
    }
  }

  private static getAuthorFromRecipe(recipe: schemaDTS.WithContext<schemaDTS.Recipe>): string {
    const author = recipe.author;
    if (typeof author === 'string') {
      return author;
    }

    if ("name" in author && author.name === 'string') {
      return author.name;
    }

    return null;
  }

  private static getNameFromRecipe(recipe: schemaDTS.WithContext<schemaDTS.Recipe>): string {
    const name = recipe.name;
    if (typeof name === 'string') {
      return name;
    }
    return null;
  }

  private static getCookTimeFromRecipe(recipe: schemaDTS.WithContext<schemaDTS.Recipe>): string {
    const name = recipe.cookTime;
    if (typeof name === 'string') {
      return name;
    }
    return null;
  }

  private static getPrepTimeFromRecipe(recipe: schemaDTS.WithContext<schemaDTS.Recipe>): string {
    const name = recipe.prepTime;
    if (typeof name === 'string') {
      return name;
    }
    return null;
  }

  private static getTotalTimeFromRecipe(recipe: schemaDTS.WithContext<schemaDTS.Recipe>): string {
    const name = recipe.totalTime;
    if (typeof name === 'string') {
      return name;
    }
    return null;
  }

  private static getCategoryFromRecipe(recipe: schemaDTS.WithContext<schemaDTS.Recipe>): string {
    const name = recipe.recipeCategory;
    if (typeof name === 'string') {
      return name;
    }
    return null;
  }

  private static getCuisineFromRecipe(recipe: schemaDTS.WithContext<schemaDTS.Recipe>): string {
    const name = recipe.recipeCuisine;
    if (typeof name === 'string') {
      return name;
    }
    return null;
  }

  private static getKeywordsFromRecipe(recipe: schemaDTS.WithContext<schemaDTS.Recipe>): string[] {
    const name = recipe.keywords;
    if (typeof name === 'string') {
      return name.split(',').map(key => key.trim());
    }
    return null;
  }

  private static getDescriptionFromRecipe(recipe: schemaDTS.WithContext<schemaDTS.Recipe>): string {
    const name = recipe.description;
    if (typeof name === 'string') {
      return name;
    }
    return null;
  }

  private static getYieldFromRecipe(recipe: schemaDTS.WithContext<schemaDTS.Recipe>): number {
    const name = recipe.yield;
    if (typeof name === 'string') {
      const regex = /\d+/;
      const matches = name.match(regex);
      return parseInt(matches[0]);
    }
    return null;
  }


}
