import { BaseError } from '../../errors/errors'
import { toJson } from '../../errors/json'
import { AxiosError } from 'axios'

export function status500(err: BaseError | Error | AxiosError, req: any, res: any, next: any) {
    if (err instanceof AxiosError) {
        res.status(err.response?.status || err.response?.data?.status || 500)
        res.json({
            api_error: err.response?.data || err.response?.statusText || err.message
        })
        return next()
    }

    const json = toJson(err)

    if (err instanceof BaseError) {
        res.status(json.status)
        delete json.status
        res.json(json)
        return next()
    }

    res.status(500)
    res.json(json)
}
