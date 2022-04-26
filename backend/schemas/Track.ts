import { list } from "@keystone-6/core"
import { text, select, relationship, timestamp } from "@keystone-6/core/fields"

// A Track is a collection of Skills that are related to on or
// many assigned User(s)
const Track = list({
  fields: {
    name: text({ validation: { isRequired: true }, isIndexed: "unique" }),
    description: text({ ui: { displayMode: "textarea" } }),
    author: relationship({ ref: "User", many: false }),
    asignees: relationship({ ref: "User", many: true }),
    skills: relationship({ ref: "Skill", many: true }),
    status: select({
      options: [
        { label: "Published", value: "published" },
        { label: "Draft", value: "draft" },
      ],
      defaultValue: "draft",
      ui: {
        displayMode: "segmented-control",
      },
    }),
    created: timestamp({
      defaultValue: { kind: "now" },
    }),
    updated: timestamp({
      db: { updatedAt: true },
    }),
  },
})

export { Track }
