import { graphql, list } from "@keystone-6/core"
import { relationship, text, timestamp, virtual } from "@keystone-6/core/fields"
// const crypto = require("crypto")

import { sendUserInvitationEmail } from "../lib/mail"

const Invitation = list({
  fields: {
    email: text({
      validation: { isRequired: true },
      isIndexed: "unique",
      isFilterable: true,
    }),
    createdBy: relationship({ ref: "User.createdInvitations", many: false }),
    created: timestamp({
      defaultValue: { kind: "now" },
    }),
    expires: timestamp({ validation: { isRequired: true } }),
    accepted: timestamp(),
    // token: virtual({
    //   field: graphql.field({
    //     type: graphql.String,
    //     resolve: async () => {
    //       const token: string = await crypto.randomBytes(48).toString("hex")
    //       return token
    //     },
    //   }),
    // }),
  },
  hooks: {
    validateInput: ({ resolvedData, addValidationError }) => {
      const { expires } = resolvedData
      const expirationDate = new Date(expires)
      const now = new Date()

      // check if invitation has expired
      if (now.getTime() > expirationDate.getTime()) {
        addValidationError("Your invitation has expired.")
      }
    },
    afterOperation: ({ operation, item }) => {
      if (operation === "create") {
        // send invitation email
        sendUserInvitationEmail(
          item?.id as string,
          item?.email as string,
          item?.expires as string
        )
      }
    },
  },
  ui: {
    labelField: "email",
    listView: {
      initialColumns: ["email", "expires", "accepted"],
    },
  },
})

export { Invitation }
