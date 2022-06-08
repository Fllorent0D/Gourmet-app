import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {DisplayRecipesComponent} from "./display-recipes.component";
import {RecipesListComponent} from "./recipes-list/recipes-list.component";
import {RecipeDetailsComponent} from "./recipe-details/recipe-details.component";
import {RecipeByIdResolver, RecipeListResolver} from "../../recipes.resolvers";


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DisplayRecipesComponent,
        children: [
          {
            path: '',
            component: RecipesListComponent,
            resolve: {
              'recipes': RecipeListResolver
            },
            children: [
              {
                path: ':id',
                component: RecipeDetailsComponent,
                resolve: {
                  'recipe': RecipeByIdResolver
                }
              }
            ]
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class DisplayRecipesRoutingModule {
}
