import { hasAccess } from '../../logic/models/user'
import { ForbiddenError } from '../../errors/errors'

export default (accessName: string) => {
    return (req: any, res: any, next: any) => {
        //Check for session and user role
        if (!req?.session?.user || hasAccess(accessName, req.session.user)) {
            return next(new ForbiddenError())
        }
        return next()
    }
}
