import { Query, Resolver, Mutation, Arg } from 'type-graphql'
import { Pet } from '../../database/entities/pet'

@Resolver()
export class PetsResolver {
  @Query(() => [Pet])
  async getPets(): Promise<Pet[]> {
    return Pet.find()
  }

  @Mutation(() => Pet)
  async createPets(
    @Arg('name', () => String) name: string,
    @Arg('userId', () => String) userId: string,
  ): Promise<Pet> {
    const pet = Object.assign(new Pet(), {
      name,
      userId,
    })

    await Pet.save(pet)

    return pet
  }
}
