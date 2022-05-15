import { graphql, list } from "@keystone-6/core"
import {
  float,
  integer,
  relationship,
  text,
  timestamp,
  virtual,
} from "@keystone-6/core/fields"

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
    skills: relationship({ ref: "Skill.team", many: true }),
    // how many levels of skill will this team have?
    levelCount: integer({ defaultValue: 0 }),
    // modifier used to calculate graph levels
    levelScaleModifier: float({ defaultValue: 2 }),
    levels: relationship({ ref: "Level.team", many: true }),
    author: relationship({ ref: "User.authoredTeams", many: false }),
    managers: relationship({ ref: "User.managedTeams", many: true }),
    members: relationship({ ref: "User.assignedTeams", many: true }),
    userLevels: relationship({ ref: "UserLevel.team", many: true }),
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
