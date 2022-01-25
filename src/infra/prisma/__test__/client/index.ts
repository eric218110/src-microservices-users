import { PrismaClient as PrismaClientOriginal } from '@prisma/client'
import { mockDeep } from 'jest-mock-extended'
import { prismaClient } from '../../client'

jest.mock('@prisma/client', () => ({
  __esModule: true,
  PrismaClient: function () {
    return mockDeep<PrismaClientOriginal>()
  }
}))

export const prismaClientMock = prismaClient
