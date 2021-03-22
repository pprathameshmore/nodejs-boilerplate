import { gql } from 'apollo-server';

export default gql`
    type UserResults {
        ok: Boolean!
        error: Error
        data: [User!]
    }

    type UserResult {
        ok: Boolean!
        error: Error
        data: User!
    }
    type User {
        id: ID
        username: String!
        password: String!
        createdAt: GraphQLDateTime
        updatedAt: GraphQLDateTime
    }

    input UserInput {
        username: String!
        password: String!
    }
`;
