import { DogModelResult, LoadDogsRepository } from '@data/protocols/dogs/show'
import { prismaClient } from '@infra/prisma/client'

export class DogRepositoryPrisma implements LoadDogsRepository {
  async onLoadDogs(): Promise<DogModelResult[]> {
    const client = prismaClient

    const dogList = await client.dog.findMany()

    return dogList
  }
}
