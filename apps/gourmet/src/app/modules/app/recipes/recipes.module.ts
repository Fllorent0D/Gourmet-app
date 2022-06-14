import {NgModule} from '@angular/core';
import {RecipesRoutingModule} from './recipes.routing';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [SharedModule, RecipesRoutingModule],
})
export class RecipesModule {
}
