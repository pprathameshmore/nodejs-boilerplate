import { gql, makeExecutableSchema } from 'apollo-server';
import { merge } from 'lodash';
import { GraphQLJSONObject } from 'graphql-type-json';
import { GraphQLDateTime } from 'graphql-iso-date';
import { userType, userResolver, userSchema } from './user';
import errorType from './error/error.type';

const Root = gql`
    scalar JSON
    scalar JSONObject
    scalar GraphQLDateTime

    type MyType {
        myValue: JSON
        myObject: JSONObject
        myDate: GraphQLDateTime
    }

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

const resolvers = merge(
    { JSONObject: GraphQLJSONObject, GraphQLDateTime },
    userResolver
);

export default makeExecutableSchema({
    typeDefs: [Root, userType, errorType, userSchema],
    resolvers,
});
