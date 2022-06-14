import {Args, Mutation, Resolver} from "@nestjs/graphql";
import {User} from "../../../@generated/user/user.model";
import {UsersService} from "../services/users.service";
import {CreateOneUserArgs} from "../../../@generated/user/create-one-user.args";
import {LoginUserOutput} from "../dto/login-user.output";
import {LoginUserInput} from "../dto/login-user.input";

@Resolver(User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService
  ) {
  }

  @Mutation(() => User)
  createUser(@Args() user: CreateOneUserArgs): Promise<User> {
    return this.usersService.create(user);
  }

  @Mutation(() => LoginUserOutput)
  loginUser(@Args() login: LoginUserInput): Promise<LoginUserOutput> {
    return this.usersService.loginUser(login);
  }

}
