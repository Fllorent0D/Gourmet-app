import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayRecipesComponent } from './display-recipes.component';
import { DisplayRecipesRoutingModule } from './display-recipes.routing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { RecipesSidebarComponent } from './recipes-sidebar/recipes-sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { FuseNavigationModule } from '../../../../../../@fuse/components/navigation';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import {FuseCardModule} from "../../../../../../@fuse/components/card";
import {MatInputModule} from "@angular/material/input";
import {QuillModule} from "ngx-quill";

@NgModule({
  declarations: [
    DisplayRecipesComponent,
    RecipesSidebarComponent,
    RecipesListComponent,
    RecipeDetailsComponent,
  ],
  imports: [
    CommonModule,
    DisplayRecipesRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    FuseNavigationModule,
    MatProgressBarModule,
    FuseCardModule,
    MatInputModule,
    QuillModule,
  ],
})
export class DisplayRecipesModule {}
