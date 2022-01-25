import { DogModel } from '@domain/model/dog'
import { ShowDogsProvider } from '@domain/useCases/dog/show'
import { ShowDogsController } from '.'

describe('ShowDogsController', () => {
  const makeShowDogsProviderStub = (): ShowDogsProvider => {
    class Stub implements ShowDogsProvider {
      showDogs(): Promise<DogModel[]> {
        const listDogs: DogModel[] = [{ name: 'any name', breed: 'any breed' }]
        return Promise.resolve(listDogs)
      }
    }
    return new Stub()
  }

  const makeSut = () => {
    const showDogsProviderStub = makeShowDogsProviderStub()
    const sut = new ShowDogsController(showDogsProviderStub)
    return {
      sut,
      showDogsProviderStub
    }
  }

  describe('GET - dogs', () => {
    it('should get /dogs call ShowDogsProvider', async () => {
      const { sut, showDogsProviderStub } = makeSut()
      const spyShowDogs = jest.spyOn(showDogsProviderStub, 'showDogs')

      await sut.handler()

      expect(spyShowDogs).toHaveBeenCalledTimes(1)
    })

    it('should ShowDogsProvider return exception if throws', async () => {
      const { sut, showDogsProviderStub } = makeSut()
      jest
        .spyOn(showDogsProviderStub, 'showDogs')
        .mockRejectedValue(new Error('any error'))

      const result = sut.handler()

      expect(result).rejects.toThrow()
    })
  })
})
