import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addRecipe: Recipe;
  deleteRecipe: Recipe;
  getRecipeFromUrl: Recipe;
  updateRecipe: Recipe;
  upsertRecipe: Recipe;
};


export type MutationAddRecipeArgs = {
  data: RecipeCreateInput;
};


export type MutationDeleteRecipeArgs = {
  where: RecipeWhereUniqueInput;
};


export type MutationGetRecipeFromUrlArgs = {
  url: Scalars['String'];
};


export type MutationUpdateRecipeArgs = {
  data: RecipeUpdateInput;
  where: RecipeWhereUniqueInput;
};


export type MutationUpsertRecipeArgs = {
  create: RecipeCreateInput;
  update: RecipeUpdateInput;
  where: RecipeWhereUniqueInput;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  findRecipe: Recipe;
  findRecipes: Array<Recipe>;
};


export type QueryFindRecipeArgs = {
  cursor?: InputMaybe<RecipeWhereUniqueInput>;
  distinct?: InputMaybe<Array<RecipeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RecipeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RecipeWhereInput>;
};


export type QueryFindRecipesArgs = {
  cursor?: InputMaybe<RecipeWhereUniqueInput>;
  distinct?: InputMaybe<Array<RecipeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RecipeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RecipeWhereInput>;
};

export type Recipe = {
  __typename?: 'Recipe';
  _count: RecipeCount;
  author?: Maybe<Scalars['String']>;
  cookTime?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Array<RecipeIngredients>>;
  instructions?: Maybe<Array<RecipeInstruction>>;
  name: Scalars['String'];
  nutrition?: Maybe<RecipeNutrition>;
  prepTime?: Maybe<Scalars['String']>;
  recipeCategory?: Maybe<Scalars['String']>;
  recipeCuisine?: Maybe<Scalars['String']>;
  recipeNutritionId?: Maybe<Scalars['Int']>;
  suitableForDiet?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  totalTime?: Maybe<Scalars['String']>;
  yield?: Maybe<Scalars['Int']>;
};


export type RecipeInstructionsArgs = {
  cursor?: InputMaybe<RecipeInstructionWhereUniqueInput>;
  distinct?: InputMaybe<Array<RecipeInstructionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RecipeInstructionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RecipeInstructionWhereInput>;
};

export type RecipeCount = {
  __typename?: 'RecipeCount';
  ingredients: Scalars['Int'];
  instructions: Scalars['Int'];
};

export type RecipeCreateInput = {
  author?: InputMaybe<Scalars['String']>;
  cookTime?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  ingredients?: InputMaybe<RecipeIngredientsCreateNestedManyWithoutRecipeInput>;
  instructions?: InputMaybe<RecipeInstructionCreateNestedManyWithoutRecipeInput>;
  name: Scalars['String'];
  nutrition?: InputMaybe<RecipeNutritionCreateNestedOneWithoutRecipeInput>;
  prepTime?: InputMaybe<Scalars['String']>;
  recipeCategory?: InputMaybe<Scalars['String']>;
  recipeCuisine?: InputMaybe<Scalars['String']>;
  recipeNutritionId?: InputMaybe<Scalars['Int']>;
  suitableForDiet?: InputMaybe<Scalars['String']>;
  thumbnailUrl?: InputMaybe<Scalars['String']>;
  totalTime?: InputMaybe<Scalars['String']>;
  yield?: InputMaybe<Scalars['Int']>;
};

export type RecipeIngredient = {
  __typename?: 'RecipeIngredient';
  _count: RecipeIngredientCount;
  id: Scalars['ID'];
  name: Scalars['String'];
  quantity?: Maybe<Scalars['Int']>;
  recipesIngredients?: Maybe<Array<RecipeIngredients>>;
  scale?: Maybe<Scalars['String']>;
};

export type RecipeIngredientCount = {
  __typename?: 'RecipeIngredientCount';
  recipesIngredients: Scalars['Int'];
};

export type RecipeIngredientCreateNestedOneWithoutRecipesIngredientsInput = {
  connect?: InputMaybe<RecipeIngredientWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RecipeIngredientCreateOrConnectWithoutRecipesIngredientsInput>;
  create?: InputMaybe<RecipeIngredientCreateWithoutRecipesIngredientsInput>;
};

export type RecipeIngredientCreateOrConnectWithoutRecipesIngredientsInput = {
  create: RecipeIngredientCreateWithoutRecipesIngredientsInput;
  where: RecipeIngredientWhereUniqueInput;
};

export type RecipeIngredientCreateWithoutRecipesIngredientsInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  quantity?: InputMaybe<Scalars['Int']>;
  scale?: InputMaybe<Scalars['String']>;
};

export type RecipeIngredientRelationFilter = {
  is?: InputMaybe<RecipeIngredientWhereInput>;
  isNot?: InputMaybe<RecipeIngredientWhereInput>;
};

export type RecipeIngredientUpdateOneRequiredWithoutRecipesIngredientsInput = {
  connect?: InputMaybe<RecipeIngredientWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RecipeIngredientCreateOrConnectWithoutRecipesIngredientsInput>;
  create?: InputMaybe<RecipeIngredientCreateWithoutRecipesIngredientsInput>;
  update?: InputMaybe<RecipeIngredientUpdateWithoutRecipesIngredientsInput>;
  upsert?: InputMaybe<RecipeIngredientUpsertWithoutRecipesIngredientsInput>;
};

export type RecipeIngredientUpdateWithoutRecipesIngredientsInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  scale?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type RecipeIngredientUpsertWithoutRecipesIngredientsInput = {
  create: RecipeIngredientCreateWithoutRecipesIngredientsInput;
  update: RecipeIngredientUpdateWithoutRecipesIngredientsInput;
};

export type RecipeIngredientWhereInput = {
  AND?: InputMaybe<Array<RecipeIngredientWhereInput>>;
  NOT?: InputMaybe<Array<RecipeIngredientWhereInput>>;
  OR?: InputMaybe<Array<RecipeIngredientWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntNullableFilter>;
  recipesIngredients?: InputMaybe<RecipeIngredientsListRelationFilter>;
  scale?: InputMaybe<StringNullableFilter>;
};

export type RecipeIngredientWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type RecipeIngredients = {
  __typename?: 'RecipeIngredients';
  ingredient: RecipeIngredient;
  ingredientId: Scalars['String'];
  recipe?: Maybe<Recipe>;
  recipeId: Scalars['String'];
};

export type RecipeIngredientsCreateNestedManyWithoutRecipeInput = {
  connect?: InputMaybe<Array<RecipeIngredientsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeIngredientsCreateOrConnectWithoutRecipeInput>>;
  create?: InputMaybe<Array<RecipeIngredientsCreateWithoutRecipeInput>>;
};

export type RecipeIngredientsCreateOrConnectWithoutRecipeInput = {
  create: RecipeIngredientsCreateWithoutRecipeInput;
  where: RecipeIngredientsWhereUniqueInput;
};

export type RecipeIngredientsCreateWithoutRecipeInput = {
  ingredient: RecipeIngredientCreateNestedOneWithoutRecipesIngredientsInput;
};

export type RecipeIngredientsListRelationFilter = {
  every?: InputMaybe<RecipeIngredientsWhereInput>;
  none?: InputMaybe<RecipeIngredientsWhereInput>;
  some?: InputMaybe<RecipeIngredientsWhereInput>;
};

export type RecipeIngredientsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RecipeIngredientsRecipeIdIngredientIdCompoundUniqueInput = {
  ingredientId: Scalars['String'];
  recipeId: Scalars['String'];
};

export type RecipeIngredientsScalarWhereInput = {
  AND?: InputMaybe<Array<RecipeIngredientsScalarWhereInput>>;
  NOT?: InputMaybe<Array<RecipeIngredientsScalarWhereInput>>;
  OR?: InputMaybe<Array<RecipeIngredientsScalarWhereInput>>;
  ingredientId?: InputMaybe<StringFilter>;
  recipeId?: InputMaybe<StringFilter>;
};

export type RecipeIngredientsUncheckedUpdateManyWithoutIngredientsInput = {
  ingredientId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RecipeIngredientsUpdateManyWithWhereWithoutRecipeInput = {
  data: RecipeIngredientsUncheckedUpdateManyWithoutIngredientsInput;
  where: RecipeIngredientsScalarWhereInput;
};

export type RecipeIngredientsUpdateManyWithoutRecipeInput = {
  connect?: InputMaybe<Array<RecipeIngredientsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeIngredientsCreateOrConnectWithoutRecipeInput>>;
  create?: InputMaybe<Array<RecipeIngredientsCreateWithoutRecipeInput>>;
  delete?: InputMaybe<Array<RecipeIngredientsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RecipeIngredientsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RecipeIngredientsWhereUniqueInput>>;
  set?: InputMaybe<Array<RecipeIngredientsWhereUniqueInput>>;
  update?: InputMaybe<Array<RecipeIngredientsUpdateWithWhereUniqueWithoutRecipeInput>>;
  updateMany?: InputMaybe<Array<RecipeIngredientsUpdateManyWithWhereWithoutRecipeInput>>;
  upsert?: InputMaybe<Array<RecipeIngredientsUpsertWithWhereUniqueWithoutRecipeInput>>;
};

export type RecipeIngredientsUpdateWithWhereUniqueWithoutRecipeInput = {
  data: RecipeIngredientsUpdateWithoutRecipeInput;
  where: RecipeIngredientsWhereUniqueInput;
};

export type RecipeIngredientsUpdateWithoutRecipeInput = {
  ingredient?: InputMaybe<RecipeIngredientUpdateOneRequiredWithoutRecipesIngredientsInput>;
};

export type RecipeIngredientsUpsertWithWhereUniqueWithoutRecipeInput = {
  create: RecipeIngredientsCreateWithoutRecipeInput;
  update: RecipeIngredientsUpdateWithoutRecipeInput;
  where: RecipeIngredientsWhereUniqueInput;
};

export type RecipeIngredientsWhereInput = {
  AND?: InputMaybe<Array<RecipeIngredientsWhereInput>>;
  NOT?: InputMaybe<Array<RecipeIngredientsWhereInput>>;
  OR?: InputMaybe<Array<RecipeIngredientsWhereInput>>;
  ingredient?: InputMaybe<RecipeIngredientRelationFilter>;
  ingredientId?: InputMaybe<StringFilter>;
  recipe?: InputMaybe<RecipeRelationFilter>;
  recipeId?: InputMaybe<StringFilter>;
};

export type RecipeIngredientsWhereUniqueInput = {
  recipeId_ingredientId?: InputMaybe<RecipeIngredientsRecipeIdIngredientIdCompoundUniqueInput>;
};

export type RecipeInstruction = {
  __typename?: 'RecipeInstruction';
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  recipe?: Maybe<Recipe>;
  recipeId?: Maybe<Scalars['String']>;
  step: Scalars['Int'];
  text: Scalars['String'];
  thumbnailUrl?: Maybe<Scalars['String']>;
};

export type RecipeInstructionCreateNestedManyWithoutRecipeInput = {
  connect?: InputMaybe<Array<RecipeInstructionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeInstructionCreateOrConnectWithoutRecipeInput>>;
  create?: InputMaybe<Array<RecipeInstructionCreateWithoutRecipeInput>>;
};

export type RecipeInstructionCreateOrConnectWithoutRecipeInput = {
  create: RecipeInstructionCreateWithoutRecipeInput;
  where: RecipeInstructionWhereUniqueInput;
};

export type RecipeInstructionCreateWithoutRecipeInput = {
  id?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  step: Scalars['Int'];
  text: Scalars['String'];
  thumbnailUrl?: InputMaybe<Scalars['String']>;
};

export type RecipeInstructionListRelationFilter = {
  every?: InputMaybe<RecipeInstructionWhereInput>;
  none?: InputMaybe<RecipeInstructionWhereInput>;
  some?: InputMaybe<RecipeInstructionWhereInput>;
};

export type RecipeInstructionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RecipeInstructionOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  imageUrl?: InputMaybe<SortOrder>;
  recipe?: InputMaybe<RecipeOrderByWithRelationInput>;
  recipeId?: InputMaybe<SortOrder>;
  step?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  thumbnailUrl?: InputMaybe<SortOrder>;
};

export enum RecipeInstructionScalarFieldEnum {
  Id = 'id',
  ImageUrl = 'imageUrl',
  RecipeId = 'recipeId',
  Step = 'step',
  Text = 'text',
  ThumbnailUrl = 'thumbnailUrl'
}

export type RecipeInstructionScalarWhereInput = {
  AND?: InputMaybe<Array<RecipeInstructionScalarWhereInput>>;
  NOT?: InputMaybe<Array<RecipeInstructionScalarWhereInput>>;
  OR?: InputMaybe<Array<RecipeInstructionScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  imageUrl?: InputMaybe<StringNullableFilter>;
  recipeId?: InputMaybe<StringNullableFilter>;
  step?: InputMaybe<IntFilter>;
  text?: InputMaybe<StringFilter>;
  thumbnailUrl?: InputMaybe<StringNullableFilter>;
};

export type RecipeInstructionUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  imageUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  step?: InputMaybe<IntFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  thumbnailUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type RecipeInstructionUpdateManyWithWhereWithoutRecipeInput = {
  data: RecipeInstructionUpdateManyMutationInput;
  where: RecipeInstructionScalarWhereInput;
};

export type RecipeInstructionUpdateManyWithoutRecipeInput = {
  connect?: InputMaybe<Array<RecipeInstructionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RecipeInstructionCreateOrConnectWithoutRecipeInput>>;
  create?: InputMaybe<Array<RecipeInstructionCreateWithoutRecipeInput>>;
  delete?: InputMaybe<Array<RecipeInstructionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RecipeInstructionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RecipeInstructionWhereUniqueInput>>;
  set?: InputMaybe<Array<RecipeInstructionWhereUniqueInput>>;
  update?: InputMaybe<Array<RecipeInstructionUpdateWithWhereUniqueWithoutRecipeInput>>;
  updateMany?: InputMaybe<Array<RecipeInstructionUpdateManyWithWhereWithoutRecipeInput>>;
  upsert?: InputMaybe<Array<RecipeInstructionUpsertWithWhereUniqueWithoutRecipeInput>>;
};

export type RecipeInstructionUpdateWithWhereUniqueWithoutRecipeInput = {
  data: RecipeInstructionUpdateWithoutRecipeInput;
  where: RecipeInstructionWhereUniqueInput;
};

export type RecipeInstructionUpdateWithoutRecipeInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  imageUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  step?: InputMaybe<IntFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  thumbnailUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type RecipeInstructionUpsertWithWhereUniqueWithoutRecipeInput = {
  create: RecipeInstructionCreateWithoutRecipeInput;
  update: RecipeInstructionUpdateWithoutRecipeInput;
  where: RecipeInstructionWhereUniqueInput;
};

export type RecipeInstructionWhereInput = {
  AND?: InputMaybe<Array<RecipeInstructionWhereInput>>;
  NOT?: InputMaybe<Array<RecipeInstructionWhereInput>>;
  OR?: InputMaybe<Array<RecipeInstructionWhereInput>>;
  id?: InputMaybe<StringFilter>;
  imageUrl?: InputMaybe<StringNullableFilter>;
  recipe?: InputMaybe<RecipeRelationFilter>;
  recipeId?: InputMaybe<StringNullableFilter>;
  step?: InputMaybe<IntFilter>;
  text?: InputMaybe<StringFilter>;
  thumbnailUrl?: InputMaybe<StringNullableFilter>;
};

export type RecipeInstructionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type RecipeNutrition = {
  __typename?: 'RecipeNutrition';
  calories?: Maybe<Scalars['String']>;
  carbohydrateContent?: Maybe<Scalars['String']>;
  cholesterolContent?: Maybe<Scalars['String']>;
  fatContent?: Maybe<Scalars['String']>;
  fiberContent?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  proteinContent?: Maybe<Scalars['String']>;
  recipe?: Maybe<Recipe>;
  recipeId?: Maybe<Scalars['String']>;
  saturatedFatContent?: Maybe<Scalars['String']>;
  servingSize?: Maybe<Scalars['Int']>;
  sodiumContent?: Maybe<Scalars['String']>;
  sugarContent?: Maybe<Scalars['String']>;
};

export type RecipeNutritionCreateNestedOneWithoutRecipeInput = {
  connect?: InputMaybe<RecipeNutritionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RecipeNutritionCreateOrConnectWithoutRecipeInput>;
  create?: InputMaybe<RecipeNutritionCreateWithoutRecipeInput>;
};

export type RecipeNutritionCreateOrConnectWithoutRecipeInput = {
  create: RecipeNutritionCreateWithoutRecipeInput;
  where: RecipeNutritionWhereUniqueInput;
};

export type RecipeNutritionCreateWithoutRecipeInput = {
  calories?: InputMaybe<Scalars['String']>;
  carbohydrateContent?: InputMaybe<Scalars['String']>;
  cholesterolContent?: InputMaybe<Scalars['String']>;
  fatContent?: InputMaybe<Scalars['String']>;
  fiberContent?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  proteinContent?: InputMaybe<Scalars['String']>;
  saturatedFatContent?: InputMaybe<Scalars['String']>;
  servingSize?: InputMaybe<Scalars['Int']>;
  sodiumContent?: InputMaybe<Scalars['String']>;
  sugarContent?: InputMaybe<Scalars['String']>;
};

export type RecipeNutritionOrderByWithRelationInput = {
  calories?: InputMaybe<SortOrder>;
  carbohydrateContent?: InputMaybe<SortOrder>;
  cholesterolContent?: InputMaybe<SortOrder>;
  fatContent?: InputMaybe<SortOrder>;
  fiberContent?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  proteinContent?: InputMaybe<SortOrder>;
  recipe?: InputMaybe<RecipeOrderByWithRelationInput>;
  recipeId?: InputMaybe<SortOrder>;
  saturatedFatContent?: InputMaybe<SortOrder>;
  servingSize?: InputMaybe<SortOrder>;
  sodiumContent?: InputMaybe<SortOrder>;
  sugarContent?: InputMaybe<SortOrder>;
};

export type RecipeNutritionRelationFilter = {
  is?: InputMaybe<RecipeNutritionWhereInput>;
  isNot?: InputMaybe<RecipeNutritionWhereInput>;
};

export type RecipeNutritionUpdateOneWithoutRecipeInput = {
  connect?: InputMaybe<RecipeNutritionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RecipeNutritionCreateOrConnectWithoutRecipeInput>;
  create?: InputMaybe<RecipeNutritionCreateWithoutRecipeInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<RecipeNutritionUpdateWithoutRecipeInput>;
  upsert?: InputMaybe<RecipeNutritionUpsertWithoutRecipeInput>;
};

export type RecipeNutritionUpdateWithoutRecipeInput = {
  calories?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  carbohydrateContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cholesterolContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fatContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fiberContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  proteinContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  saturatedFatContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  servingSize?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  sodiumContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sugarContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type RecipeNutritionUpsertWithoutRecipeInput = {
  create: RecipeNutritionCreateWithoutRecipeInput;
  update: RecipeNutritionUpdateWithoutRecipeInput;
};

export type RecipeNutritionWhereInput = {
  AND?: InputMaybe<Array<RecipeNutritionWhereInput>>;
  NOT?: InputMaybe<Array<RecipeNutritionWhereInput>>;
  OR?: InputMaybe<Array<RecipeNutritionWhereInput>>;
  calories?: InputMaybe<StringNullableFilter>;
  carbohydrateContent?: InputMaybe<StringNullableFilter>;
  cholesterolContent?: InputMaybe<StringNullableFilter>;
  fatContent?: InputMaybe<StringNullableFilter>;
  fiberContent?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  proteinContent?: InputMaybe<StringNullableFilter>;
  recipe?: InputMaybe<RecipeRelationFilter>;
  recipeId?: InputMaybe<StringNullableFilter>;
  saturatedFatContent?: InputMaybe<StringNullableFilter>;
  servingSize?: InputMaybe<IntNullableFilter>;
  sodiumContent?: InputMaybe<StringNullableFilter>;
  sugarContent?: InputMaybe<StringNullableFilter>;
};

export type RecipeNutritionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  recipeId?: InputMaybe<Scalars['String']>;
};

export type RecipeOrderByWithRelationInput = {
  author?: InputMaybe<SortOrder>;
  cookTime?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageUrl?: InputMaybe<SortOrder>;
  ingredients?: InputMaybe<RecipeIngredientsOrderByRelationAggregateInput>;
  instructions?: InputMaybe<RecipeInstructionOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  nutrition?: InputMaybe<RecipeNutritionOrderByWithRelationInput>;
  prepTime?: InputMaybe<SortOrder>;
  recipeCategory?: InputMaybe<SortOrder>;
  recipeCuisine?: InputMaybe<SortOrder>;
  recipeNutritionId?: InputMaybe<SortOrder>;
  suitableForDiet?: InputMaybe<SortOrder>;
  thumbnailUrl?: InputMaybe<SortOrder>;
  totalTime?: InputMaybe<SortOrder>;
  yield?: InputMaybe<SortOrder>;
};

export type RecipeRelationFilter = {
  is?: InputMaybe<RecipeWhereInput>;
  isNot?: InputMaybe<RecipeWhereInput>;
};

export enum RecipeScalarFieldEnum {
  Author = 'author',
  CookTime = 'cookTime',
  Description = 'description',
  Id = 'id',
  ImageUrl = 'imageUrl',
  Name = 'name',
  PrepTime = 'prepTime',
  RecipeCategory = 'recipeCategory',
  RecipeCuisine = 'recipeCuisine',
  RecipeNutritionId = 'recipeNutritionId',
  SuitableForDiet = 'suitableForDiet',
  ThumbnailUrl = 'thumbnailUrl',
  TotalTime = 'totalTime',
  Yield = 'yield'
}

export type RecipeUpdateInput = {
  author?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  cookTime?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  imageUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ingredients?: InputMaybe<RecipeIngredientsUpdateManyWithoutRecipeInput>;
  instructions?: InputMaybe<RecipeInstructionUpdateManyWithoutRecipeInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nutrition?: InputMaybe<RecipeNutritionUpdateOneWithoutRecipeInput>;
  prepTime?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  recipeCategory?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  recipeCuisine?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  recipeNutritionId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  suitableForDiet?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  thumbnailUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  totalTime?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  yield?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type RecipeWhereInput = {
  AND?: InputMaybe<Array<RecipeWhereInput>>;
  NOT?: InputMaybe<Array<RecipeWhereInput>>;
  OR?: InputMaybe<Array<RecipeWhereInput>>;
  author?: InputMaybe<StringNullableFilter>;
  cookTime?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  imageUrl?: InputMaybe<StringNullableFilter>;
  ingredients?: InputMaybe<RecipeIngredientsListRelationFilter>;
  instructions?: InputMaybe<RecipeInstructionListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  nutrition?: InputMaybe<RecipeNutritionRelationFilter>;
  prepTime?: InputMaybe<StringNullableFilter>;
  recipeCategory?: InputMaybe<StringNullableFilter>;
  recipeCuisine?: InputMaybe<StringNullableFilter>;
  recipeNutritionId?: InputMaybe<IntNullableFilter>;
  suitableForDiet?: InputMaybe<StringNullableFilter>;
  thumbnailUrl?: InputMaybe<StringNullableFilter>;
  totalTime?: InputMaybe<StringNullableFilter>;
  yield?: InputMaybe<IntNullableFilter>;
};

export type RecipeWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type RecipeCreateOneMutationVariables = Exact<{
  recipeCreateInput: RecipeCreateInput;
}>;


export type RecipeCreateOneMutation = { __typename?: 'Mutation', addRecipe: { __typename?: 'Recipe', id: string } };

export type FindRecipeByIdQueryVariables = Exact<{
  recipeId: Scalars['String'];
}>;


export type FindRecipeByIdQuery = { __typename?: 'Query', findRecipe: { __typename?: 'Recipe', id: string, name: string, description?: string | null, instructions?: Array<{ __typename?: 'RecipeInstruction', id: string, text: string }> | null } };

export type ListRecipesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListRecipesQuery = { __typename?: 'Query', findRecipes: Array<{ __typename?: 'Recipe', id: string, name: string, description?: string | null }> };

export type AllRecipeQueryVariables = Exact<{ [key: string]: never; }>;


export type AllRecipeQuery = { __typename?: 'Query', findRecipe: { __typename?: 'Recipe', id: string, name: string, suitableForDiet?: string | null, instructions?: Array<{ __typename?: 'RecipeInstruction', id: string, text: string }> | null } };

export const RecipeCreateOneDocument = gql`
    mutation recipeCreateOne($recipeCreateInput: RecipeCreateInput!) {
  addRecipe(data: $recipeCreateInput) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RecipeCreateOneGQL extends Apollo.Mutation<RecipeCreateOneMutation, RecipeCreateOneMutationVariables> {
    document = RecipeCreateOneDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindRecipeByIdDocument = gql`
    query findRecipeById($recipeId: String!) {
  findRecipe(where: {id: {equals: $recipeId}}) {
    id
    name
    description
    instructions(orderBy: {step: desc}) {
      id
      text
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FindRecipeByIdGQL extends Apollo.Query<FindRecipeByIdQuery, FindRecipeByIdQueryVariables> {
    document = FindRecipeByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ListRecipesDocument = gql`
    query listRecipes {
  findRecipes {
    id
    name
    description
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ListRecipesGQL extends Apollo.Query<ListRecipesQuery, ListRecipesQueryVariables> {
    document = ListRecipesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AllRecipeDocument = gql`
    query allRecipe {
  findRecipe {
    id
    name
    suitableForDiet
    instructions(orderBy: {step: desc}) {
      id
      text
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AllRecipeGQL extends Apollo.Query<AllRecipeQuery, AllRecipeQueryVariables> {
    document = AllRecipeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }