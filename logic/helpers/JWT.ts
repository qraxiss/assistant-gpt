import JWT from 'jsonwebtoken'
import config from '../../config'

import { ForbiddenError } from '../../errors/errors'

export function decode(token: string) {
    try {
        const result = JWT.verify(token, config.JWT_SECRET)
        if (typeof result === 'string') {
            throw result
        }
        return result
    } catch (error: any) {
        throw new ForbiddenError(error.message)
    }
}
