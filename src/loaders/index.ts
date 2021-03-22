import databaseLoader from './database';
import expressLoader from './express';
import dependencyInjectorLoader from './dependencyInjector';

export default async ({ expressApp }) => {
    await databaseLoader();
    console.log('Connected to Database');


    // dependencyInjectorLoader({ models: [assetModel, assetTypeModel] });

    require('./centrifuge');
    console.log('Jobs loaded');

    await expressLoader(expressApp);
    console.log('Express app loaded');
};
