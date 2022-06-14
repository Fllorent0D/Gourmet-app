import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class LoginUserOutput {
  @Field(() => String)
  access_token: string;
}
