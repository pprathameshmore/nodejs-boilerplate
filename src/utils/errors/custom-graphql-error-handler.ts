import { MongoError } from 'graphql-compose-mongoose';
import mongoose from 'mongoose';
export class GeneralGraphQLError extends Error {
    ok: boolean = true;
    errorMessage: string;
    code: string;
    suggestion: string;

    constructor(error: Error, code: string = 'Error', suggestion?: string) {
        super(error.message);
        this.code = code;
        if (error instanceof mongoose.Error.ValidationError) {
            this.code = 'ValidationError';
        }
        if (error instanceof mongoose.Error.ValidationError.CastError) {
            this.code = 'CastingError';
        }
        if (error instanceof MongoError) {
            this.code = 'DuplicateKeyError';
        }
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
        this.errorMessage = error.message;
        this.suggestion = suggestion || '';
    }
}
