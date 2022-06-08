import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApolloQueryResult} from "@apollo/client";
import {FindRecipeByIdQuery} from "../../../../../../@generated/graphql";
import {map, Observable} from "rxjs";
import {RecipesListComponent} from "../recipes-list/recipes-list.component";

@Component({
  selector: 'gourmet-app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {

  recipeQuery$: Observable<ApolloQueryResult<FindRecipeByIdQuery>>

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly recipeListComponent: RecipesListComponent
  ) {
  }

  ngOnInit(): void {
    this.recipeQuery$ = this.activatedRoute.data.pipe(
      map(({recipe}) => recipe)
    )
  }

  goBack() {
    this.recipeListComponent.selectedRecipeId = null;
  }

}
