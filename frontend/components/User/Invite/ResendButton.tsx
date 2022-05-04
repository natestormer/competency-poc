import { TypedDocumentNode, useMutation } from "@apollo/client"
import { ReactNode } from "react"
import { invitationExpirationHours } from "../../../config"

import {
  ResendInvitationDocument,
  ResendInvitationMutation,
} from "../../../graphql/generated"

interface UserInviteResendButtonProps {
  id: string
  refreshQueries?: { query: any }[]
  children?: ReactNode
}

const UserInviteResendButton = ({
  id,
  refreshQueries,
  children = "Resend",
}: UserInviteResendButtonProps) => {
  const now = new Date()
  // expires 24 hours from now
  const expiryDate = new Date(
    now.getTime() + invitationExpirationHours * 60 * 60 * 1000
  )
  let mutationArgs: any = {
    variables: {
      id,
      expires: expiryDate,
    },
  }

  if (refreshQueries) {
    mutationArgs.refetchQueries = refreshQueries
  }

  const [resendInvitation, { data, loading, error }] =
    useMutation<ResendInvitationMutation>(
      ResendInvitationDocument,
      mutationArgs
    )

  const handleOnClick = async () => {
    await resendInvitation()
  }

  return (
    <button type="button" onClick={handleOnClick} disabled={loading}>
      {children}
    </button>
  )
}

export { UserInviteResendButton }
