import {ArgsType, Field} from "@nestjs/graphql";
import {IsEmail} from "class-validator";

@ArgsType()
export class ImportRecipeInputArgs {

  @Field()
  @IsEmail()
  url: string;
}
