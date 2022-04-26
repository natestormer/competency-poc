import { list } from "@keystone-6/core"
import { text, relationship, timestamp } from "@keystone-6/core/fields"

// A Tier is a place in a Skill. Tiers represent different levels
// of competency within a Skill
const Tier = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    description: text({ ui: { displayMode: "textarea" } }),
    skill: relationship({ ref: "Skill", many: false }),
  },
})

export { Tier }
