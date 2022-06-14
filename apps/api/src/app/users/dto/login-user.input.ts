import {ArgsType, Field} from "@nestjs/graphql";

@ArgsType()
export class LoginUserInput {
  @Field(() => String)
  email: string;
  @Field(() => String)
  password: string;
}
