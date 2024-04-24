import { Module } from '@nestjs/common'
import { FluxController } from './flux.controller'

@Module({
  imports: [],
  providers: [],
  exports: [],
  controllers: [FluxController],
})
export class FluxModule { }
