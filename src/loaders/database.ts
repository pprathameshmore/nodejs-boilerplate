import { connect } from 'mongoose';
import configs from '../configs/index';

export default async (): Promise<any> => {
    try {
        const connection = await connect(configs.DB.URL, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        return connection.connection.db;
    } catch (error) {
        throw error;
    }
};
