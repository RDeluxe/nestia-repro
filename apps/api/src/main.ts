import { NestFactory } from '@nestjs/core'
import * as dotenv from 'dotenv'
import { AppModule } from './app.module'
import config from './config'

dotenv.config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(config.api.port)
}
bootstrap()
