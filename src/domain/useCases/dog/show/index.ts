import { DogModel } from '@domain/model/dog'

export interface ShowDogsProvider {
  showDogs: () => Promise<Array<DogModel>>
}
