import {NgModule} from '@angular/core';
import {ComposeRecipesRoutingModule} from "./compose-recipes.routing";
import {AddRecipePageComponent} from "./add-recipe.page.component";
import {SharedModule} from "../../../../../shared/shared.module";
import {
  IngredientsFormControlComponent
} from "./components/ingredients-form-control/ingredients-form-control.component";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    AddRecipePageComponent,
    IngredientsFormControlComponent
  ],
  imports: [
    SharedModule,
    ComposeRecipesRoutingModule,
    MatIconModule,
  ]
})
export class ComposeRecipesModule {
}
