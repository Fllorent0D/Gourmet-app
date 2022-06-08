import { Component, OnInit } from '@angular/core';
import {ListRecipesGQL, ListRecipesQuery, Recipe} from "../../../../../@generated/graphql";
import {map, Observable} from "rxjs";
import {ApolloQueryResult} from "@apollo/client";

@Component({
  selector: 'gourmet-app-show-recipes',
  templateUrl: './show-recipes.component.html',
  styleUrls: ['./show-recipes.component.scss'],
})
export class ShowRecipesComponent implements OnInit {
  recipes$: Observable<ApolloQueryResult<ListRecipesQuery>>

  constructor(
    private readonly listRecipesGQL: ListRecipesGQL
  ) {}

  ngOnInit(): void {
    this.recipes$ = this.listRecipesGQL.fetch();
  }
}
