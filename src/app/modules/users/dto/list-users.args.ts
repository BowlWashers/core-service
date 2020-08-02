import { IsEmail } from 'class-validator';
import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class ListUsersArgs {
  @Field(() => String, { nullable: true })
  @IsEmail()
  email?: string;

  @Field({ nullable: true })
  createdDate?: Date;

  @Field({ nullable: true })
  updatedDate?: Date;

  @Field({ nullable: true })
  deletedDate?: Date;
}
