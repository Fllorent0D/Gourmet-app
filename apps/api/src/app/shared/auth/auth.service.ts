import {Injectable} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {PrismaService} from "../db/prisma.service";
import {User} from "../../../@generated/user/user.model";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prismaService: PrismaService
  ) {
  }

  async validateUser(email: string, password: string): Promise<User | undefined> {
    const user: User = await this.prismaService.user.findFirst({where: {email: email}});
    if (user) {
      const pwdMatch = await bcrypt.compare(password, user.password);
      if (pwdMatch) {
        return user;
      }
    }
    return undefined;
  }

  generateUserCredentials(user: User): { access_token: string } {
    const payload = {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      sub: user.id
    }

    return {
      access_token: this.jwtService.sign(payload)
    }
  }

}
