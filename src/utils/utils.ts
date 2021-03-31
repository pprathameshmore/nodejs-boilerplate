import { Document } from 'mongoose';
import jwt from 'jsonwebtoken';
import { GeneralGraphQLError } from './errors/custom-graphql-error-handler';
import configs from '../configs';

interface IGraphQLResponse {
    ok: boolean;
    error: {
        code: string;
        message: string;
        suggestion: string;
    } | null;
    data: null | Document[] | Document;
}

export const response = (
    statusCode: number,
    message: string | object,
    data: any
) => {
    return {
        statusCode,
        message,
        data,
    };
};

export const isDefVar = (variable: any) => (variable ? true : false);

export const isDefObject = (object) =>
    Object.keys(object).length === 0 ? false : true;

export const graphQLResponseGenerator = (
    data: Document | Document[] | null
): IGraphQLResponse => {
    return { ok: true, data, error: null };
};

export const graphQLErrorHandler = (error: Error): IGraphQLResponse => {
    const e = new GeneralGraphQLError(error);
    return {
        ok: false,
        error: {
            code: e.code,
            message: e.errorMessage,
            suggestion: e.suggestion,
        },
        data: null,
    };
};

export const verifyJWT = (token: string | undefined) => {
    try {
        if (token === '' || !token || token === undefined) {
            throw new Error('Token required');
        }
        return jwt.verify(token, configs.JWT_KEY!);
    } catch (error) {
        throw new Error(error);
    }
};
