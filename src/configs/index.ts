import { config } from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFile = config();

if (envFile.error) {
    throw new Error('env file is missing');
}

export default {
    HOSTNAME: process.env.HOSTNAME,
    PORT: parseInt(process.env.PORT!) || 9999,
    DB: {
        URL: process.env.DB_URL!,
        NAME: process.env.DB_NAME!,
    },
    JWT_KEY: process.env.JWT_KEY,
    API_PREFIX: process.env.API_PREFIX || 'api',
    CENTRIFUGE: {
        HOST: process.env.CENTRIFUGE_HOST!,
        JWT: process.env.CENTRIFUGE_JWT!,
    },
};
