import { graphql, list } from "@keystone-6/core"
import { relationship, text, timestamp, virtual } from "@keystone-6/core/fields"

const Team = list({
  fields: {
    name: text({
      validation: { isRequired: true },
    }),
    description: text(),
    created: timestamp({
      defaultValue: { kind: "now" },
    }),
    updated: timestamp({
      db: { updatedAt: true },
    }),
    author: relationship({ ref: "User.authoredTeams", many: false }),
    managers: relationship({ ref: "User.managedTeams", many: true }),
    members: relationship({ ref: "User.assignedTeams", many: true }),
    currentUserIsAuthor: virtual({
      field: graphql.field({
        type: graphql.Boolean,
        resolve: async (item: any, args, context) => {
          // current User id from session
          const currentUserId = context.session.data.id

          // if no user from session, return out
          if (!currentUserId) {
            return false
          }

          // query for this team where current user is author
          const authorArticleQuery = await context.db.Team.findMany({
            where: {
              id: {
                equals: item.id,
              },
              author: {
                id: {
                  equals: currentUserId,
                },
              },
            },
          })

          // if query doesn't return a team, return out
          if (authorArticleQuery && authorArticleQuery.length) {
            return true
          }

          // default to false
          return false
        },
      }),
    }),
    currentUserIsManager: virtual({
      field: graphql.field({
        type: graphql.Boolean,
        resolve: async (item: any, args, context) => {
          // current User id from session
          const currentUserId = context.session.data.id

          // if no user from session, return out
          if (!currentUserId) {
            return false
          }

          // query for this team where current user is author
          const managerArticleQuery = await context.db.Team.findMany({
            where: {
              id: {
                equals: item.id,
              },
              managers: {
                some: {
                  id: {
                    equals: currentUserId,
                  },
                },
              },
            },
          })

          // if query doesn't return a team, return out
          if (managerArticleQuery && managerArticleQuery.length) {
            return true
          }

          // default to false
          return false
        },
      }),
    }),
  },
})

export { Team }
