import { list } from "@keystone-6/core"
import { float, relationship, text, timestamp } from "@keystone-6/core/fields"

const UserLevelHistory = list({
  fields: {
    currentLevel: float({ validation: { isRequired: true } }),
    comment: text(),
    user: relationship({ ref: "User.userLevelsHistory", many: false }),
    userLevel: relationship({ ref: "UserLevel.history", many: false }),
    created: timestamp({
      defaultValue: { kind: "now" },
    }),
  },
  ui: {
    labelField: "currentLevel",
    listView: {
      initialColumns: ["user", "currentLevel"],
    },
  },
})

export { UserLevelHistory }
