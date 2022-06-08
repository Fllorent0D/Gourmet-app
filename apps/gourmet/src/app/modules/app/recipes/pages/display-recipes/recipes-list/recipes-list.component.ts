import {Component, OnInit} from '@angular/core';
import {ListRecipesQuery} from "../../../../../../@generated/graphql";
import {map, Observable} from "rxjs";
import {ApolloQueryResult} from "@apollo/client";
import {ActivatedRoute} from "@angular/router";
import {RecipeDetailsComponent} from "../recipe-details/recipe-details.component";
import {DisplayRecipesComponent} from "../display-recipes.component";

@Component({
  selector: 'gourmet-app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  recipes$: Observable<ApolloQueryResult<ListRecipesQuery>>
  selectedRecipeId: string


  constructor(
    public readonly recipeComponent: DisplayRecipesComponent,
    private readonly activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.recipes$ = this.activatedRoute.data.pipe(map((data) => data.recipes))
  }

  updateSelectedRecipe(id: string) {
    this.selectedRecipeId = id;
  }

}
