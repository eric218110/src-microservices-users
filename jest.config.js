const tsConfig = require('./tsconfig.json')
const { pathsToModuleNameMapper } = require('ts-jest/utils')

module.exports = {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/*-.module.ts',
    '!<rootDir>/src/main/**/*.ts',
    '!<rootDir>/src/domain/**/*.ts',
    '!<rootDir>/src/module/**/*.ts',
    '!<rootDir>/src/infra/prisma/__test__/**/*.ts'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: pathsToModuleNameMapper(tsConfig.compilerOptions.paths, {
    prefix: '<rootDir>/src/'
  })
}
