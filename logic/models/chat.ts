import * as validators from '../validators/chat'
import { validate } from '../helpers/validator'
import * as types from '../types'

import { ChatModel, Chat } from '../../database/models/chat'

import { DatabaseError, NotFoundError } from '../../errors/errors'

import { getResponse } from '../helpers/ai-analysis'

export async function createChat(params: any): Promise<Chat> {
    const value = validate(params, validators.createChat) as types.createChat

    const result = await ChatModel.create(value)

    if (!result) {
        throw new DatabaseError('Error creating chat')
    }

    return result
}

export async function updateChat(params: any): Promise<{ result: boolean }> {
    const value = validate(params, validators.updateChat) as types.updateChat

    const result = await ChatModel.updateOne({ name: value.name }, value.chat, { new: true })

    if (!result.acknowledged) {
        throw new DatabaseError('Error updating chat')
    }

    if (result.matchedCount === 0) {
        throw new NotFoundError('Chat not found!')
    }

    return { result: result.modifiedCount > 0 }
}

export async function deleteChat(params: any): Promise<{ result: boolean }> {
    const value = validate(params, validators.deleteChat) as types.deleteChat

    const result = await ChatModel.deleteOne(value)

    if (!result.acknowledged) {
        throw new DatabaseError('Error deleting chat')
    }

    return { result: result.deletedCount > 0 }
}

export async function getChat(params: any): Promise<Chat[] | Chat> {
    const value = validate(params, validators.getChat) as types.getChat

    // if query is {}, return all chats
    if (Object.keys(value).length === 0) {
        return await ChatModel.find()
    }

    const result = await ChatModel.findOne(value)

    if (!result && Object.keys(value).length !== 0) {
        throw new NotFoundError('Chat not found!')
    }

    return result as Chat
}

export async function appendMessage(params: any): Promise<{ result: boolean }> {
    const value = validate(params, validators.appendMessage) as types.appendMessage

    const result = await ChatModel.updateOne({ name: value.name }, { $push: { history: value.message } })

    if (!result.acknowledged) {
        throw new DatabaseError('Error appending message')
    }

    if (result.matchedCount === 0) {
        throw new NotFoundError('Chat not found!')
    }

    return { result: result.modifiedCount > 0 }
}

export async function sendHistoryToOpenAi(params: any) {
    const value = validate(params, validators.getSingleChat) as types.getSingleChat

    const result = await ChatModel.findOne(value)

    if (!result) {
        throw new NotFoundError('Chat not found!')
    }

    if (result.history.length === 0) {
        throw new NotFoundError('Chat history is empty!')
    }

    const message = await getResponse(result.history)

    return {
        response: message,
        isMessageSaved: await appendMessage({ name: value.name, message: message })
    }
}
