import { gql } from "@apollo/client"

import { CURRENT_USER_FIELDS } from "../fragments"

export const CURRENT_USER_QUERY = gql`
  ${CURRENT_USER_FIELDS}

  query {
    ...currentUserFields
  }
`
