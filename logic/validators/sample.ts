import Joi from 'joi'

export const createSample = Joi.object({
    name: Joi.string().required(),
    age: Joi.number()
})

export const updateSample = Joi.object({
    name: Joi.string().required(),
    sample: Joi.object({
        name: Joi.string(),
        age: Joi.number()
    })
})

export const deleteSample = Joi.object({
    name: Joi.string().required()
})

export const getSample = Joi.object({
    name: Joi.string()
})
