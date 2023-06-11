import * as dotenv from 'dotenv'

dotenv.config()

type config = {
    PORT: number
    MONGO_CONNECTION: string
    JWT_SECRET: string
    SESSION_SECRET: string
}

const env = process.env as any

const variables: config = {
    PORT: env.PORT,
    MONGO_CONNECTION: env.MONGO_CONNECTION,
    JWT_SECRET: env.JWT_SECRET,
    SESSION_SECRET: env.SESSION_SECRET
}

export default variables
