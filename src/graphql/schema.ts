import { gql, makeExecutableSchema } from 'apollo-server-express';
import { merge } from 'lodash';
import { userType, userResolver, userSchema } from './user';

const Root = gql`
    type Query {
        _empty: String
    }
    type Mutation {
        _empty: String
    }
    schema {
        query: Query
        mutation: Mutation
    }
`;

const resolvers = merge(userResolver);

export default makeExecutableSchema({
    typeDefs: [Root, userType, userSchema],
    resolvers,
});
