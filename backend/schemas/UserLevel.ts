import { list } from "@keystone-6/core"
import { relationship, timestamp } from "@keystone-6/core/fields"

const UserLevel = list({
  fields: {
    user: relationship({ ref: "User.userLevels", many: false }),
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
})

export { UserLevel }
