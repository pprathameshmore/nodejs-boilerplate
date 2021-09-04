import { Inject, Service, Container } from 'typedi';
import User from '../models/User';

Container.set('userModel', User);
@Service()
export default class UserServices {
    constructor(@Inject('userModel') private userModel) {}

    public async getAssets() {
        try {
            return await this.userModel.find();
        } catch (error) {
            throw error;
        }
    }

    /**
     * async  createUser
     */
    public async createUser(username: string, password: string) {
        try {
            return await this.userModel.create({
                username,
                password,
            });
        } catch (error) {
            throw error;
        }
    }
}
