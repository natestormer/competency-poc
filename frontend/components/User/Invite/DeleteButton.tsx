import { TypedDocumentNode, useMutation } from "@apollo/client"
import { ReactNode } from "react"

import {
  DeleteInvitationDocument,
  DeleteInvitationMutation,
} from "../../../graphql/generated"

interface UserInviteDeleteButtonProps {
  id: string
  refreshQueries?: { query: any; variables?: any }[]
  children?: ReactNode
}

const UserInviteDeleteButton = ({
  id,
  refreshQueries,
  children = "Delete",
}: UserInviteDeleteButtonProps) => {
  let mutationArgs: any = {
    variables: {
      id,
    },
  }

  if (refreshQueries) {
    mutationArgs.refetchQueries = refreshQueries
  }

  const [deleteInvitation, { data, loading, error }] =
    useMutation<DeleteInvitationMutation>(
      DeleteInvitationDocument,
      mutationArgs
    )

  const handleOnClick = async () => {
    await deleteInvitation()
  }

  return (
    <button type="button" onClick={handleOnClick} disabled={loading}>
      {children}
    </button>
  )
}

export { UserInviteDeleteButton }
