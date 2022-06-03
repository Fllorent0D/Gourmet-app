import {Module} from '@nestjs/common';
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {join} from 'path';
import {RecipesModule} from "./recipes/recipes.module";
import {HttpModule} from "@nestjs/axios";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      debug: true,
      autoSchemaFile: join(process.cwd(), 'apps/api/src/schema.gql')
    }),
    RecipesModule,
  ],
})
export class AppModule {
}
