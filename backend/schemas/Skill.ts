import { list } from "@keystone-6/core"
import { relationship, text, timestamp } from "@keystone-6/core/fields"

const Skill = list({
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
    author: relationship({ ref: "User.authoredSkills", many: false }),
    team: relationship({ ref: "Team.skills", many: false }),
  },
})

export { Skill }
