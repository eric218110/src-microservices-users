import { ShowDogsProvider } from '@domain/useCases/dog/show'
import { Controller, Get, Inject } from '@nestjs/common'

@Controller('dogs')
export class ShowDogsController {
  constructor(
    @Inject('ShowDogsProvider')
    private readonly showDogsProvider: ShowDogsProvider
  ) {}

  @Get()
  handler() {
    return this.showDogsProvider.showDogs()
  }
}
