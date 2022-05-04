import { useQuery } from "@apollo/client"
import {
  CurrentUserInvitationsDocument,
  CurrentUserInvitationsQuery,
} from "../../../graphql/generated"
import { FormCreateInvitation } from "../../Form/CreateInvitation"
import { UserInviteList } from "./List"

const UserInviteManage = () => {
  const { data, error } = useQuery<CurrentUserInvitationsQuery>(
    CurrentUserInvitationsDocument
  )

  if (error) {
    console.warn(error)
    return <div>Something went wrong.</div>
  }

  return (
    <section>
      <FormCreateInvitation />
      {data?.authenticatedItem?.createdInvitations?.length && (
        <>
          <br />
          <hr />
          <UserInviteList list={data.authenticatedItem.createdInvitations} />
        </>
      )}
    </section>
  )
}

export { UserInviteManage }
