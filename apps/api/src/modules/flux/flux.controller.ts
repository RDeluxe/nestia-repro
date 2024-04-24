import { TypedRoute } from '@nestia/core'
import { Body, Controller, Post } from '@nestjs/common'
import { Source } from '@prisma/client'

export interface LaunchParsingDTO {
  source: Source
  dryRun?: boolean
}

@Controller('flux')
export class FluxController {
  @TypedRoute.Post('parse')
  parse(@Body() launchParseDTO: LaunchParsingDTO): void {
    // eslint-disable-next-line no-console
    console.log(launchParseDTO)
  }
}
