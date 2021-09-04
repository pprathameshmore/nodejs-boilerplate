import { gql } from 'apollo-server-express';

export default gql`
    type User {
        id: ID!
        username: String!
        password: String!
    }

    input UserInput {
        username: String!
        password: String!
    }
`;
