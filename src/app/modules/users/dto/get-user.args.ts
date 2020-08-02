import { Min } from 'class-validator';
import { Field, ArgsType, Int } from '@nestjs/graphql';

@ArgsType()
export class GetUserArgs {
  @Field(() => Int)
  @Min(1)
  id: number;
}
