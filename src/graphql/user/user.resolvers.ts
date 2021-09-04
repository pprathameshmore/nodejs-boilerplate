import Container from 'typedi';
import UserServices from '../../services/user.services';

const userService = Container.get(UserServices);

export default {
    Query: {
        getUsers: async (parent: any, args: any, context: any, info: any) => {
            try {
                const users = await userService.getAssets();
                return users;
            } catch (error) {
                throw error;
            }
        },
    },

    Mutation: {
        createUser: async (
            parent: any,
            args: { userInput: any },
            context: any,
            info: any
        ) => {
            const { userInput } = args;
            try {
                const { username, password } = userInput;
                const user = await userService.createUser(username, password);
                return user;
            } catch (error) {
                throw error;
            }
        },
    },
};
