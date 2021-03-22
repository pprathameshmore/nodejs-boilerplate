export class GeneralError extends Error {
    constructor(message: string) {
        super();
        this.message = message;
    }

    getCode() {
        if (this instanceof BadRequest) {
            return 400;
        }
        if (this instanceof NotFound) {
            return 404;
        }
        if (this instanceof AuthError) return 401;
    }
}

export class BadRequest extends GeneralError {}
export class NotFound extends GeneralError {}
export class AuthError extends GeneralError {}
