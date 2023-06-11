import Joi from 'joi'

export const createChat = Joi.object({
    name: Joi.string().required()
})

export const updateChat = Joi.object({
    name: Joi.string().required(),
    chat: Joi.object({
        name: Joi.string()
    })
})

export const deleteChat = Joi.object({
    name: Joi.string().required()
})

export const getChat = Joi.object({
    name: Joi.string()
})

export const appendMessage = Joi.object({
    name: Joi.string().required(),
    message: Joi.object({
        content: Joi.string().required(),
        role: Joi.string().required()
    }).required()
})
