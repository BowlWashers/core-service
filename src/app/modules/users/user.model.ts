import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IUser } from './interfaces/user.interface';

@ObjectType()
export class User implements IUser {
  @Field(() => Int)
  id: number;

  @Field()
  email: string;

  @Field()
  password?: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: Date;
}
