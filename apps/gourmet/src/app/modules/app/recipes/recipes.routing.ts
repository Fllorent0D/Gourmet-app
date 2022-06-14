import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: 'compose',
        loadChildren: () => import('./pages/compose-recipes/compose-recipes.module').then(m => m.ComposeRecipesModule),
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('./pages/display-recipes/display-recipes.module').then(m => m.DisplayRecipesModule)
      },
    ])
  ]
})
export class RecipesRoutingModule {
}
