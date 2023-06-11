import Mongoose, { connection } from 'mongoose'
import config from '../config'

try {
    Mongoose.connect(config.MONGO_CONNECTION)
    console.log(`Connected to the => ${config.MONGO_CONNECTION}`)
} catch {
    console.log(`Could not connect to the => ${config.MONGO_CONNECTION}`)
}

export { connection }
