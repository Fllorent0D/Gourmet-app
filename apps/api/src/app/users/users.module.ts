import {Module} from "@nestjs/common";
import {SharedModule} from "../shared/shared.module";
import {UsersService} from "./services/users.service";
import {UsersResolver} from "./resolvers/users.resolver";

@Module({
  imports: [SharedModule],
  providers: [
    UsersService,
    UsersResolver
  ]
})
export class UsersModule {

}
