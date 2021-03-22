import { Application } from 'express';
import logger from 'morgan';

export default (app: Application) => {
    app.use(logger('dev'));
};
