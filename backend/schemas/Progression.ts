import { list } from "@keystone-6/core"
import { text, relationship, timestamp } from "@keystone-6/core/fields"

const Progression = list({
  fields: {
    author: relationship({ ref: "User", many: false }),
    comment: text({ ui: { displayMode: "textarea" } }),
    track: relationship({ ref: "Track", many: false }),
    skill: relationship({ ref: "Skill", many: false }),
    created: timestamp({
      defaultValue: { kind: "now" },
    }),
    updated: timestamp({
      db: { updatedAt: true },
    }),
  },
})

export { Progression }
