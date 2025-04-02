import {
  Query,
  Resolver,
  FieldResolver,
  Mutation,
  Arg,
  Root,
} from 'type-graphql'
import { User } from '../../database/entities/user'
import { Pet } from '@/modules/pets/database/entities/pet'

@Resolver(() => User)
export class UsersResolver {
  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return User.find()
  }

  @Mutation(() => User)
  async createUsers(
    @Arg('firstname', () => String) firstname: string,
    @Arg('lastname', () => String) lastname: string,
    @Arg('email', () => String) email: string,
    @Arg('password', () => String) password: string,
  ): Promise<User> {
    const user = Object.assign(new User(), {
      firstname,
      lastname,
      email,
      password,
    })

    await User.save(user)

    return user
  }

  @FieldResolver(() => [Pet])
  async pets(@Root() root: User): Promise<Pet[]> {
    return Pet.find({ where: { userId: root.id } })
  }
}
