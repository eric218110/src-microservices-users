import { LoadDogsRepository } from '@data/protocols/dogs/show'
import { DogModel } from '@domain/model/dog'
import { ShowDogsProvider } from '@domain/useCases/dog/show'
import { Inject } from '@nestjs/common'

export class ShoowDogs implements ShowDogsProvider {
  constructor(
    @Inject('LoadDogsRepository')
    private readonly loadDogsRepository: LoadDogsRepository
  ) {}

  public async showDogs(): Promise<Array<DogModel>> {
    const result = await this.loadDogsRepository.onLoadDogs()
    return Promise.resolve(result)
  }
}
