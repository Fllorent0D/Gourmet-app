import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/app/example/example.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RecipeSidebarComponent } from './sidebar/recipe-sidebar/recipe-sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import {MatMenuModule} from "@angular/material/menu";
import {FuseCardModule} from "../../../../@fuse/components/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";
import {CommonModule} from "@angular/common";
import {MatDividerModule} from "@angular/material/divider";

const exampleRoutes: Route[] = [
  {
    path: '',
    component: ExampleComponent,
  },
];

@NgModule({
  declarations: [
    ExampleComponent,
    RecipeSidebarComponent,
    RecipeDetailComponent,
  ],
  imports: [
    RouterModule.forChild(exampleRoutes),
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    FuseCardModule,
    MatButtonModule,
    MatInputModule,
    MatTooltipModule,
    CommonModule,
    MatDividerModule,
  ],
})
export class ExampleModule {}
