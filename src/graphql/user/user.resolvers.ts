import Container from 'typedi';
import UserServices from '../../services/user.services';
import {
    graphQLResponseGenerator,
    graphQLErrorHandler,
} from '../../utils/utils';

const userService = Container.get(UserServices);

export default {
    Query: {
        getUsers: async (parent: any, args: any, context: any, info: any) => {
            try {
                const users = await userService.getAssets();
                return graphQLResponseGenerator(users);
            } catch (error) {
                return graphQLErrorHandler(error);
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
                const assetCreated = await userService.createUser(
                    username,
                    password
                );
                return graphQLResponseGenerator(assetCreated);
            } catch (error) {
                return graphQLErrorHandler(error);
            }
        },
    },
};
