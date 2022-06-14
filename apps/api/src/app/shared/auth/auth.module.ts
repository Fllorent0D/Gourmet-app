import {forwardRef, Module} from "@nestjs/common";
import {JwtModule} from "@nestjs/jwt";
import {AuthService} from "./auth.service";
import {SharedModule} from "../shared.module";
import {JwtAuthStrategy} from "./jwt-auth.strategy";

@Module({
  imports: [
    forwardRef(() => SharedModule),
    JwtModule.register({
      secret: 'SECRET',
      signOptions: {
        expiresIn: '60m'
      }
    })
  ],
  providers: [AuthService, JwtAuthStrategy],
  exports: [AuthService]
})
export class AuthModule {

}
