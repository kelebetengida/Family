import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $location: String, $organization: String, $profession: [ID], $interest: [ID]) {
    addUser(username: $username, email: $email, password: $password, organization: $organization, location: $location, profession: $profession, interest: $interest) {
      token
      user {
        _id
        username
        email
        password
        location
        organization
        interest {
          _id
          interestOption
        }
        profession {
          _id
          professionOption
        }
      }
    }
  }
`;

// export const ADD_INTEREST = gql`
//   mutation addInterest($interestOption: [ID]) {
//     addInterest(interestOption: $interestOption) {
//       _id
//       interestOption
//     }
//   }
// `;

// export const ADD_COMMENT = gql`
//   mutation addComment($thoughtId: ID!, $commentText: String!) {
//     addComment(thoughtId: $thoughtId, commentText: $commentText) {
//       _id
//       thoughtText
//       thoughtAuthor
//       createdAt
//       comments {
//         _id
//         commentText
//         createdAt
//       }
//     }
//   }
// `;
