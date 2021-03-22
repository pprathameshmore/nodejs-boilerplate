import { gql } from "apollo-server";

export default gql`
  type Error {
    code: String!
    message: String!
    suggestion: String
  }
`;
