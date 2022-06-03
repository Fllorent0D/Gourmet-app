import {HttpService} from "@nestjs/axios";
import {load} from 'cheerio';
import {firstValueFrom} from "rxjs";
import {Injectable} from "@nestjs/common";
import * as schemaDTS from "schema-dts";
import {RecipeSEOMapper} from "../mappers/recipe-seo.mapper";
import {Recipe} from "../../../@generated/recipe/recipe.model";

@Injectable()
export class RecipeImporterService {
  constructor(
    private readonly httpClient: HttpService
  ) {
  }

  async getRecipeFromUrl(url: string): Promise<Recipe> {
    const recipeSEO: schemaDTS.WithContext<schemaDTS.Recipe> = await this.getSEORecipeFromWebsite(url);
    return RecipeSEOMapper.mapRecipeSEOToRecipe(recipeSEO);
  }


  private async getSEORecipeFromWebsite(url: string): Promise<schemaDTS.WithContext<schemaDTS.Recipe>> {
    const page = await firstValueFrom(this.httpClient.get(url, {responseType: 'text'}))
    const document = load(page.data);
    const ldJsons = document('script[type*="application/ld+json"]');
    for (const json of ldJsons.get()) {
      try {
        const seoInfo = JSON.parse((json.children?.[0] as unknown as Text)?.data);
        if (Array.isArray(seoInfo)) {
          for (const infoBloc of seoInfo) {
            if (infoBloc['@type'] === 'Recipe') {
              return infoBloc as schemaDTS.WithContext<schemaDTS.Recipe>;
            }
          }
        }

        if (seoInfo['@type'] === 'Recipe') {
          return seoInfo as schemaDTS.WithContext<schemaDTS.Recipe>;
        }
      } catch (e) {
        console.error('Wrong JSON');
      }
    }
  }

}
