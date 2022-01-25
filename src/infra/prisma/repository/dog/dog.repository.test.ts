import { DogRepositoryPrisma } from '@infra/prisma/repository/dog'
import { prismaClientMock } from '@infra/prisma/__test__/client'
import { dogMock } from '@infra/prisma/__test__/mock/dogMock'

describe('DogRepositoryPrisma', () => {
  jest.resetAllMocks()

  describe('onLoadDogs', () => {
    it('should onLoadDogs returns dog', async () => {
      const sut = new DogRepositoryPrisma()
      prismaClientMock.dog.findMany = jest.fn().mockResolvedValue([dogMock])

      const dogList = await sut.onLoadDogs()

      expect(dogList).toMatchObject([dogMock])
    })
  })
})
