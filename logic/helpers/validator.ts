import { ObjectSchema } from 'joi'

export function validate(params: object, validator: ObjectSchema) {
    let { value, error } = validator.validate(params)
    if (error) throw error
    return value
}
