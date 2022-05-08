import { list } from "@keystone-6/core"
import { integer, relationship, text, timestamp } from "@keystone-6/core/fields"

const Level = list({
  fields: {
    name: text({
      validation: { isRequired: true },
    }),
    description: text(),
    level: integer({
      defaultValue: 0,
      validation: { isRequired: true },
    }),
    created: timestamp({
      defaultValue: { kind: "now" },
    }),
    updated: timestamp({
      db: { updatedAt: true },
    }),
    author: relationship({ ref: "User.authoredLevels", many: false }),
    team: relationship({ ref: "Team.levels", many: false }),
    skill: relationship({ ref: "Skill.levels", many: false }),
  },
})

export { Level }