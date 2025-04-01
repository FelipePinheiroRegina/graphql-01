import { Query, Resolver } from 'type-graphql'
import { User } from '../../database/entities/user'

@Resolver()
export class UsersResolver {
  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return User.find()
  }
}
