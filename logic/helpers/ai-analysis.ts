import axios from 'axios'
import config from '../../config'

import * as types from '../types'

export const api = axios.create({
    baseURL: config.AI_ANALYSIS_API,
    headers: {
        'Content-Type': 'application/json'
    }
})

export async function getResponse(messages: types.appendMessage['message'][]): Promise<types.appendMessage> {
    const response = await api.post('/openai', {
        prompt: 'assistant', // key of the prompt in the database
        variables: {},
        temperature: 0.7,
        history: messages
    })

    return response.data
}
