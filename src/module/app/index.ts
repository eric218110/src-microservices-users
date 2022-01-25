import { DogModule } from '@module/dog'
import { Module } from '@nestjs/common'

@Module({
  imports: [DogModule]
})
export class AppModule {}
