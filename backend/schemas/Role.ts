import { list } from "@keystone-6/core"
import { relationship, text } from "@keystone-6/core/fields"
import { permissionFields } from "./fields"

const Role = list({
  fields: {
    name: text({
      validation: { isRequired: true },
    }),
    ...permissionFields,
    asignees: relationship({
      ref: "User.role",
      many: true,
      ui: {
        displayMode: "select",
        labelField: "email",
        itemView: { fieldMode: "read" },
      },
    }),
  },
  ui: {
    labelField: "name",
    listView: {
      initialColumns: ["name", "asignees"],
    },
  },
})

export { Role }
