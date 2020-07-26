import { Query, Resolver, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './user.model';
import { GetUserArgs } from './dto/get-user.args';
import { ListUsersArgs } from './dto/list-users.args';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => User, { name: 'user', nullable: true })
  async getUser(@Args() { id }: GetUserArgs): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Query(() => [User], { name: 'users' })
  async listUsers(@Args() filters: ListUsersArgs): Promise<User[]> {
    return this.usersService.findAll({
      where: [filters],
      skip: 0,
      take: 10,
    });
  }
}
