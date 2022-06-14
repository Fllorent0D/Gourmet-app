import {Injectable, UnauthorizedException} from "@nestjs/common";
import {PrismaService} from "../../shared/db/prisma.service";
import {CreateOneUserArgs} from "../../../@generated/user/create-one-user.args";
import {User} from "../../../@generated/user/user.model";
import * as bcrypt from 'bcrypt';
import {AuthService} from "../../shared/auth/auth.service";
import {LoginUserInput} from "../dto/login-user.input";
import {LoginUserOutput} from "../dto/login-user.output";

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly authService: AuthService
  ) {
  }

  async create(createUserInput: CreateOneUserArgs): Promise<User> {
    const saltOrRound = 10;
    const password = createUserInput.data.password;
    createUserInput.data.password = await bcrypt.hash(password, saltOrRound);
    createUserInput.data.role = 'user';
    try {
      return await this.prismaService.user.create(createUserInput);
    } catch (e) {
      throw new Error('Failed to create user');
    }
  }

  async loginUser(loginUserInput: LoginUserInput): Promise<LoginUserOutput> {
    const user = await this.authService.validateUser(loginUserInput.email, loginUserInput.password);
    if (user) {
      return this.authService.generateUserCredentials(user);
    }
    throw new UnauthorizedException('Wrong credentials');
  }

}
