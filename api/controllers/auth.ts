import * as error from '../../errors/errors'
import { getUserFromToken } from '../../logic/models/user'
import { ahandler } from '../../errors/handle'

export class Auth {
    @ahandler
    static async login(req: any, res: any) {
        //Delete current session
        if (req.session?.user) req.session.user = undefined

        //Check for user
        let user = getUserFromToken(req.body.token)

        req.session.user = user

        return res.json({ result: true })
    }

    @ahandler
    static async logout(req: any, res: any, next: any) {
        if (!req?.session?.user) return next(new error.SessionError(''))

        req.session.user = undefined
        req.session.destroy()

        return res.json({ result: true })
    }

    @ahandler
    static async check(req: any, res: any) {
        if (!req?.session?.user) return res.json({ result: false })
        return res.json({ result: true })
    }
}
