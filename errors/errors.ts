export abstract class BaseError extends Error {
    status: number
    detail: string

    protected constructor(message: string, status: number, detail: string) {
        super(message)
        this.status = status
        this.detail = detail
    }

    abstract serializeErrors(): { status: number; detail: string; message: string }[]
}

export class BadRequestError extends BaseError {
    constructor(message: string = '') {
        super(message, 400, 'Bad Request')
    }

    serializeErrors() {
        return [{ status: this.status, detail: this.detail, message: this.message }]
    }
}

export class FileExtensionError extends BaseError {
    constructor(message: string = '') {
        super(message, 400, 'This file extension is not valid, please try again with something else.')
    }

    serializeErrors() {
        return [{ status: this.status, detail: this.detail, message: this.message }]
    }
}

export class CastError extends BaseError {
    constructor(message: string = '') {
        super(message, 400, 'Parameters are not valid, please try again with something else.')
    }

    serializeErrors() {
        return [{ status: this.status, detail: this.detail, message: this.message }]
    }
}

export class SessionError extends BaseError {
    constructor(message: string = '') {
        super(message, 400, "We can't find your session, please make sure everything is okay.")
    }

    serializeErrors() {
        return [{ status: this.status, detail: this.detail, message: this.message }]
    }
}

export class ForbiddenError extends BaseError {
    constructor(message: string = '') {
        super(message, 403, "You can't access here.")
    }

    serializeErrors() {
        return [{ status: this.status, detail: this.detail, message: this.message }]
    }
}

export class ValidationError extends BaseError {
    constructor(message: string = '') {
        super(message, 400, "We can't validate your data, please make sure everything is okay.")
    }

    serializeErrors() {
        return [{ status: this.status, detail: this.detail, message: this.message }]
    }
}

export class NotFoundError extends BaseError {
    constructor(message: string = '') {
        super(message, 404, "We can't find something, please make sure everything is okay.")
    }

    serializeErrors() {
        return [{ status: this.status, detail: this.detail, message: this.message }]
    }
}

export class TokenInvalidError extends BaseError {
    constructor(message: string = '') {
        super(message, 401, "We can't decode your token, are you trying to hack us? Don't push it so much.")
    }

    serializeErrors() {
        return [{ status: this.status, detail: this.detail, message: this.message }]
    }
}

export class TokenExpiredError extends BaseError {
    constructor(message: string = '') {
        super(message, 401, 'Your token is expired, please login again.')
    }

    serializeErrors() {
        return [{ status: this.status, detail: this.detail, message: this.message }]
    }
}

export class FileCorruptedError extends BaseError {
    constructor(message: string = '') {
        super(message, 400, 'File is corrupted or not available for use, please try with something else.')
    }

    serializeErrors() {
        return [{ status: this.status, detail: this.detail, message: this.message }]
    }
}

export class FileNotFoundError extends BaseError {
    constructor(message: string = '') {
        super(message, 400, "File doesn't exist or not available for use, please try again later.")
    }

    serializeErrors() {
        return [{ status: this.status, detail: this.detail, message: this.message }]
    }
}

export class DatabaseError extends BaseError {
    constructor(message: string = '') {
        super(message, 400, 'Something went wrong with the database, please try again later.')
    }

    serializeErrors() {
        return [{ status: this.status, detail: this.detail, message: this.message }]
    }
}

export class ItemExistsError extends BaseError {
    constructor(message: string = '') {
        super(message, 400, 'Item already exists, please try again with something else.')
    }

    serializeErrors() {
        return [{ status: this.status, detail: this.detail, message: this.message }]
    }
}
