import {NgModule} from '@angular/core';
import {AddRecipePageComponent} from './containers/add-recipe.page/add-recipe.page.component';
import {RecipesRoutingModule} from './recipes.routing';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {SharedModule} from '../../../shared/shared.module';
import {ShowRecipesComponent} from './containers/show-recipes/show-recipes.component';

@NgModule({
  declarations: [
    AddRecipePageComponent,
    ShowRecipesComponent,
  ],
  imports: [
    SharedModule,
    RecipesRoutingModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class RecipesModule {
}
