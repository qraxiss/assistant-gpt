import { ForbiddenError, ValidationError } from '../../errors/errors'

export function requireAuth(req: any, res: any, next: any) {
    try {
        if (!req?.session?.user) return next(new ForbiddenError())

        return next()
    } catch (ex) {
        if (ex instanceof ValidationError) {
            req.session.user = undefined
        }

        next(ex)
    }
}
