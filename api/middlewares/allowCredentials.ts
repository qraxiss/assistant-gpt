import { ValidationError } from '../../errors/errors'

export function allowCredentials(req: any, res: any, next: any) {
    //Check for user role
    try {
        return next()
    } catch (ex) {
        if (ex instanceof ValidationError) {
            req.session.user = undefined
        }

        next(ex)
    }
}
