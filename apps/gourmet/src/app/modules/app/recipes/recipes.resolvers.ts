import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {FindRecipeByIdGQL, FindRecipeByIdQuery, ListRecipesGQL, ListRecipesQuery} from "../../../@generated/graphql";
import {Observable} from "rxjs";
import {ApolloQueryResult} from "@apollo/client";

@Injectable({
  providedIn: 'root'
})
export class RecipeByIdResolver implements Resolve<ApolloQueryResult<FindRecipeByIdQuery>> {

  constructor(
    private readonly findRecipeByIdGQL: FindRecipeByIdGQL
  ) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ApolloQueryResult<FindRecipeByIdQuery>> {
    const id = route.paramMap.get('id');
    return this.findRecipeByIdGQL.fetch({recipeId: id});
  }
}


@Injectable({
  providedIn: 'root'
})
export class RecipeListResolver implements Resolve<ApolloQueryResult<ListRecipesQuery>> {

  constructor(
    private readonly recipesGQL: ListRecipesGQL
  ) {
  }

  resolve(): Observable<ApolloQueryResult<ListRecipesQuery>> {
    return this.recipesGQL.fetch();
  }
}
