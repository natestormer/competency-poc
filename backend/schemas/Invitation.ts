import { graphql, list } from "@keystone-6/core"
import { relationship, text, timestamp, virtual } from "@keystone-6/core/fields"
// const crypto = require("crypto")

import { sendUserInvitationEmail, sendUserReInvitationEmail } from "../lib/mail"

const Invitation = list({
  fields: {
    email: text({
      validation: { isRequired: true },
      isIndexed: "unique",
      isFilterable: true,
      hooks: {
        validateInput: async ({
          addValidationError,
          resolvedData,
          fieldKey,
          context,
        }) => {
          const email = resolvedData[fieldKey]

          if (email) {
            // check that email does not exist in Invitations
            const emailMatch = await context.db.Invitation.findOne({
              where: { email: email },
            })
            if (emailMatch) {
              addValidationError(
                "ERR: There is already an invitaiton for this email."
              )
            }

            // check if a User exists with this email
            const matchUser = await context.db.User.findOne({
              where: { email: email },
            })
            if (matchUser) {
              addValidationError(`ERR: ${email} is already a user.`)
            }
          }
        },
      },
    }),
    createdBy: relationship({ ref: "User.createdInvitations", many: false }),
    created: timestamp({
      defaultValue: { kind: "now" },
    }),
    expires: timestamp({ validation: { isRequired: true } }),
    accepted: timestamp(),
    expired: virtual({
      field: graphql.field({
        type: graphql.Boolean,
        resolve: async (parent) => {
          const item = parent as any

          if (!item || typeof item !== "object" || !item.expires) {
            return null
          }

          const now = new Date()
          const expiryDate = new Date(item.expires)
          return now.getTime() > expiryDate.getTime()
        },
      }),
    }),
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
    validateInput: async ({ resolvedData, addValidationError, context }) => {
      const { expires } = resolvedData
      const expirationDate = new Date(expires)
      const now = new Date()

      // check if invitation has expired
      if (now.getTime() > expirationDate.getTime()) {
        addValidationError("ERR: Your invitation has expired.")
      }
    },
    afterOperation: async ({ operation, item }) => {
      console.log(item)
      if (operation === "create") {
        // send invitation email
        await sendUserInvitationEmail(
          item?.id as string,
          item?.email as string,
          item?.expires as string
        )
      }
      if (operation === "update") {
        // send re-invitation email
        if (!item.accepted) {
          await sendUserReInvitationEmail(
            item?.id as string,
            item?.email as string,
            item?.expires as string
          )
        }
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
