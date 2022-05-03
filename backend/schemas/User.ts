// Like the `config` function we use in keystone.ts, we use functions
// for putting in our config so we get useful errors. With typescript,
// we get these even before code runs.
import { graphql, list } from "@keystone-6/core"

// We're using some common fields in the starter. Check out https://keystonejs.com/docs/apis/fields#fields-api
// for the full list of fields.
import {
  text,
  password,
  relationship,
  timestamp,
  virtual,
} from "@keystone-6/core/fields"
import { isSignedIn, permissions } from "../access"

const User = list({
  // Here are the fields that `User` will have. We want an email and password so they can log in
  // a name so we can refer to them, and a way to connect users to posts.
  access: {
    operation: {
      query: isSignedIn,
      // @Todo more granular permissions based on
      // isAdmin, isManager and can manage team return filters
      create: () => true,
      update: permissions.canManageUsers,
      delete: permissions.canManageUsers,
    },
  },
  fields: {
    firstName: text({
      validation: { isRequired: true },
      db: { map: "first_name" },
    }),
    lastName: text({
      validation: { isRequired: true },
      db: { map: "last_name" },
    }),
    fullName: virtual({
      field: graphql.field({
        type: graphql.String,
        resolve: (item, args, context, info) => {
          const parent: any = item
          return `${parent.firstName} ${parent.lastName}`
        },
      }),
    }),
    email: text({
      validation: { isRequired: true },
      isIndexed: "unique",
      isFilterable: true,
    }),
    // The password field takes care of hiding details and hashing values
    password: password({ validation: { isRequired: true } }),
    registered: timestamp({
      defaultValue: { kind: "now" },
    }),
    role: relationship({ ref: "Role.asignees" }),
    invitation: relationship({ ref: "Invitation", many: false }),
    createdInvitations: relationship({
      ref: "Invitation.createdBy",
      many: true,
    }),
  },
  // Here we can configure the Admin UI. We want to show a user's name and posts in the Admin UI
  ui: {
    labelField: "fullName",
    listView: {
      initialColumns: ["lastName", "firstName", "email"],
    },
  },
})

export { User }
