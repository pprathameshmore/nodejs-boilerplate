import { gql } from 'apollo-server-express';

const userSchema = gql`
    extend type Query {
        getUsers: [User!]!
    }
    extend type Mutation {
        createUser(userInput: UserInput!): User!
    }
`;

export default userSchema;
