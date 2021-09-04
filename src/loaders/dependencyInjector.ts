import { Container } from 'typedi';
import UserServices from '../services/user.services';

export default () => {
    try {
        Container.set('userService', UserServices);
    } catch (error) {
        console.log('Error on dependency injector loader: %o', error);
        throw error;
    }
};
