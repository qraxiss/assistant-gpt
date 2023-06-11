import { validate } from '../helpers/validator'
import { decode } from '../helpers/JWT'

import * as validators from '../validators/user'
import type { user } from '../types/user'

export function getUserFromToken(token: string): user {
    const result = decode(token)
    let { iat, exp, ...data } = result
    const value = validate(data, validators.user)

    return value
}

export function hasAccess(accessName: string, data: object): boolean {
    const value = validate(data, validators.user)
    if (value.accesses.includes(accessName)) {
        return true
    }
    return false
}
