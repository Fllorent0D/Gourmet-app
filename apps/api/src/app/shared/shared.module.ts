import {Module} from "@nestjs/common";
import {PrismaService} from "./prisma.service";
import {HttpModule} from "@nestjs/axios";

@Module({
  imports: [HttpModule,],
  providers: [PrismaService],
  exports: [PrismaService, HttpModule]
})
export class SharedModule {

}
