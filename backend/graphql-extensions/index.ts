import { graphQLSchemaExtension } from "@keystone-6/core"

import { allUserTeams } from "./queries/allUserTeams"

export const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: `
    type User {
      """ Return all teams a user is assigned to """
      allUserTeams: [Team]
    }
  `,
  resolvers: {
    User: {
      allUserTeams,
    },
  },
})
