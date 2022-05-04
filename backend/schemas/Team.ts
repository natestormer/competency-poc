import { list } from "@keystone-6/core"
import { relationship, text, timestamp } from "@keystone-6/core/fields"

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
  },
})

export { Team }
