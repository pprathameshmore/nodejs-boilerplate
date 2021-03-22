import 'reflect-metadata'; // We need this in order to use @Decorators
import express from 'express';
import config from './configs';

async function startServer() {
    const app = express();
    // await loader(app);
    require('./loaders').default({ expressApp: app });

    app.listen(config.PORT, () => {
        console.log('Server running on ' + config.PORT);
    }).on('error', (error) => {
        console.log(error);
        process.exit(1);
    });
}

startServer();
