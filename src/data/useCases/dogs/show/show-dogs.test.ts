import { ShoowDogs } from '@data/useCases/dogs/show'
import { DogModelResult, LoadDogsRepository } from '@data/protocols/dogs/show'

describe('ShoowDogs', () => {
  const fakeResults: DogModelResult[] = [
    {
      id: 1,
      name: 'caramelo',
      breed: 'vira-lata',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]
  const makeDogRepositoryStub = (): LoadDogsRepository => {
    class Stub implements LoadDogsRepository {
      onLoadDogs(): Promise<DogModelResult[]> {
        return Promise.resolve(fakeResults)
      }
    }
    return new Stub()
  }

  const makeSut = () => {
    const dogRepositoryStub = makeDogRepositoryStub()
    const sut = new ShoowDogs(dogRepositoryStub)
    return { sut, dogRepositoryStub }
  }

  describe('success', () => {
    describe('showDogs', () => {
      it('should showDogs returns a list dogs', async () => {
        const { sut } = makeSut()
        const result = await sut.showDogs()
        expect(result).toMatchObject(fakeResults)
      })

      it('should showDogs call LoadDogsRepository', async () => {
        const { sut, dogRepositoryStub } = makeSut()

        const spy = jest.spyOn(dogRepositoryStub, 'onLoadDogs')
        await sut.showDogs()

        expect(spy).toHaveBeenCalledTimes(1)
      })
    })
  })
})
