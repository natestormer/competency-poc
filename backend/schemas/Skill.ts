import { list } from "@keystone-6/core"
import { text, relationship, timestamp } from "@keystone-6/core/fields"

// A Skill is a part of a Track. A skill has Tiers, or levels
// that associate progress within a given Skill
const Skill = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    description: text({ ui: { displayMode: "textarea" } }),
    author: relationship({ ref: "User", many: false }),
    tiers: relationship({ ref: "Tier", many: true }),
    created: timestamp({
      defaultValue: { kind: "now" },
    }),
    updated: timestamp({
      db: { updatedAt: true },
    }),
  },
})

export { Skill }
