import config from '../configs/index';
import express, { Application } from 'express';
import path from 'path';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import errorHandler from '../api/middlewares/error-handler';
import apiRouter from '../api/routes';
import logger from './logger';
import schema from '../graphql/schema';

export default async (app: Application) => {
    //For server's health check
    app.get('/status', (req, res) => {
        res.status(200).end();
    });
    app.head('/status', (req, res) => {
        res.status(200).end();
    });

    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(cors());
    logger(app);

    //API Routes
    app.use(`/${config.API_PREFIX}`, apiRouter);
    app.use(errorHandler);

    //GraphQL Server
    const server = new ApolloServer({
        schema,
        context: async ({ req, res }) => ({ req, res }),
    });

    server.applyMiddleware({ app, path: '/graphql' });

    return app;
};
