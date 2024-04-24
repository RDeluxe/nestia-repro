import { Module } from '@nestjs/common'
import { FluxModule } from 'src/modules/flux/flux.module'

@Module({
  imports: [FluxModule],
  controllers: [],
  providers: [],
})
export class AppModule {

}
