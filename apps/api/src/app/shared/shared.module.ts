import {Module} from "@nestjs/common";
import {PrismaService} from "./db/prisma.service";
import {HttpModule} from "@nestjs/axios";
import {AuthModule} from "./auth/auth.module";

@Module({
  imports: [HttpModule, AuthModule],
  providers: [PrismaService],
  exports: [PrismaService, HttpModule, AuthModule]
})
export class SharedModule {

}
