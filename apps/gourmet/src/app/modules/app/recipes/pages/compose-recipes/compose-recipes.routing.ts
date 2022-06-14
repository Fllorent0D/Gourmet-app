import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {AddRecipePageComponent} from "./add-recipe.page.component";


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([{
      path: '',
      component: AddRecipePageComponent
    }])
  ]
})
export class ComposeRecipesRoutingModule {
}
