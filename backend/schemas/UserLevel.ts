import { list } from "@keystone-6/core"
import { float, relationship, text, timestamp } from "@keystone-6/core/fields"

const UserLevel = list({
  fields: {
    user: relationship({ ref: "User.userLevels", many: false }),
    comment: text(),
    currentLevel: float(), // can this become a virtual field that pulls value from history type?
    history: relationship({ ref: "UserLevelHistory.userLevel", many: true }),
    level: relationship({ ref: "Level.userLevels", many: false }),
    team: relationship({ ref: "Team.userLevels", many: false }),
    skill: relationship({ ref: "Skill.userLevels", many: false }),
    // @Todo: add history relation once we get the UserLevelHistory schema in place
    created: timestamp({
      defaultValue: { kind: "now" },
    }),
    updated: timestamp({
      db: { updatedAt: true },
    }),
  },
  hooks: {
    afterOperation: async ({ operation, context, item }) => {
      // create a UserLevelHistory record on create or update
      if (operation === "create" || operation === "update") {
        await context.query.UserLevelHistory.createOne({
          data: {
            currentLevel: item.currentLevel,
            comment: item.comment,
            created: operation === "create" ? item.created : item.updated,
            user: {
              connect: {
                id: item.userId,
              },
            },
            userLevel: {
              connect: {
                id: item.id,
              },
            },
          },
        })
      }
    },
  },
  ui: {
    labelField: "created",
    listView: {
      initialColumns: ["user", "skill", "level", "currentLevel"],
    },
  },
})

export { UserLevel }
