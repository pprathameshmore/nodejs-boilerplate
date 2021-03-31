import { CustomError } from './custom-errors';

export class DatabaseConnectionError extends CustomError {
    statusCode = 500;
    reason = 'Database connection error';
    constructor() {
        super();
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
    serializeErrors() {
        return [{ message: this.reason }];
    }
}
