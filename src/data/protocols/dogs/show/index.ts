import { BasePropsResult } from '@data/protocols/base'
import { DogModel } from '@domain/model/dog'

export type DogModelResult = BasePropsResult & DogModel

export interface LoadDogsRepository {
  onLoadDogs: () => Promise<DogModelResult[]>
}
