import { ShoowDogs } from '@data/useCases/dogs/show'
import { Module } from '@nestjs/common'
import { ShowDogsController } from '@presentation/controllers/show-dogs.controller'
import { DogRepositoryPrisma } from 'infra/prisma/repository/dog'

@Module({
  controllers: [ShowDogsController],
  providers: [
    {
      provide: 'LoadDogsRepository',
      useClass: DogRepositoryPrisma
    },
    {
      provide: 'ShowDogsProvider',
      useClass: ShoowDogs
    }
  ]
})
export class DogModule {}
