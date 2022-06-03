import {Module} from "@nestjs/common";
import {RecipeResolver} from "./resolvers/recipe.resolver";
import {SharedModule} from "../shared/shared.module";
import {RecipeImporterService} from "./services/recipe-importer.service";

@Module({
  imports: [SharedModule],
  providers: [RecipeResolver, RecipeImporterService]
})
export class RecipesModule {

}
