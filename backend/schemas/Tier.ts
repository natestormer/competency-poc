import { list } from "@keystone-6/core"
import { text, relationship, timestamp } from "@keystone-6/core/fields"

// A Tier is a place in a Skill. Tiers represent different levels
// of competency within a Skill
const Tier = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    description: text({ ui: { displayMode: "textarea" } }),
    author: relationship({ ref: "User", many: false }),
    skill: relationship({ ref: "Skill", many: false }),
    created: timestamp({
      defaultValue: { kind: "now" },
    }),
    updated: timestamp({
      db: { updatedAt: true },
    }),
  },
})

export { Tier }
