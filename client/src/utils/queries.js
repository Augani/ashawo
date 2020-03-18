import { gql } from 'apollo-boost'

export const  LOGIN_SCRIPT = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      _id,
      username,
      ratings,
      active,
      phoneNumber,
      email
    }
  }
`;

export const RESET_PASSWORD = gql`
mutation Reset($username: String!){
    resetPass(username: $username){
        response
    }
}
`;

export const REGISTER_NEW_USER = gql`
    mutation Register($firstName: String!, $lastName: String!, $username: String!, $email: String!, $phoneNumber: String!, $country: String!, $password: String!){
        register(username: $username, password: $password, email: $email, phoneNumber: $phoneNumber, country: $country){
            _id,
            username,
            email,
            phoneNumber,
            country,
            ratings,
            active
        }
    }
`;