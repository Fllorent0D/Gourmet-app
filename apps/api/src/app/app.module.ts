import {Module} from '@nestjs/common';
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {join} from 'path';
import {RecipesModule} from "./recipes/recipes.module";
import {UsersModule} from "./users/users.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      debug: true,
      autoSchemaFile: join(process.cwd(), 'apps/api/src/schema.gql')
    }),
    RecipesModule,
    UsersModule
  ],
})
export class AppModule {
}
