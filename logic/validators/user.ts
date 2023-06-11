import * as Joi from 'joi'
import { joiObjectId } from 'ts-joi-objectid'

const objectId = joiObjectId(Joi)

export const user = Joi.object({
    id: objectId().required(),
    name: Joi.string().required(),
    surname: Joi.string().required(),
    email: Joi.string().required(),
    accesses: Joi.array().items(Joi.string()).required()
})
