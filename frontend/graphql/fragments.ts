import { gql } from "@apollo/client"

export const PUBLIC_USER_FIELDS = gql`
  fragment publicUserFields on User {
    id
    firstName
    lastName
    email
  }
`

export const CURRENT_USER_FIELDS = gql`
  fragment currentUserFields on Query {
    authenticatedItem {
      ... on User {
        id
        firstName
        lastName
        email
      }
    }
  }
`

export const REQUIRED_APP_DATA_QUERY_FIELDS = gql`
  ${CURRENT_USER_FIELDS}

  fragment requiredAppDataQueryFields on Query {
    ...currentUserFields
  }
`
