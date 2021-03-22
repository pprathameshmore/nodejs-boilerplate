import { gql } from 'apollo-server';

const userSchema = gql`
    extend type Query {
        getUsers: UserResults!
    }
    extend type Mutation {
        createUser(userInput: UserInput!): UserResult!
    }
`;

export default userSchema;
