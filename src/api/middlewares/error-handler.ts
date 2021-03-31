import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../../utils/errors/custom-errors';

const errorHandler = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (error instanceof CustomError) {
        return res
            .status(error.statusCode)
            .send({ errors: error.serializeErrors() });
    }
    return res.status(400).send({
        errors: [{ message: error.message }],
    });
};

export default errorHandler;
