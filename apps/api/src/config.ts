import * as dotenv from 'dotenv'

import { envsafe, num, str } from 'envsafe'

dotenv.config()

const validatedEnv = envsafe({
  NODE_ENV: str({
    devDefault: 'development',
    choices: ['development', 'test', 'production'],
  }),
  API_PORT: num({
    devDefault: 3000,
    desc: 'REST API port',
  }),
})

const config = {
  env: validatedEnv.NODE_ENV,
  api: {
    port: validatedEnv.API_PORT,
  },
}

export default config
