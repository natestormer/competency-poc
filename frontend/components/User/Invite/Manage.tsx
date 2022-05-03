import { useQuery } from "@apollo/client"
import {
  CurrentUserInvitationsDocument,
  CurrentUserInvitationsQuery,
} from "../../../graphql/generated"
import { UserInviteList } from "./List"

const UserInviteManage = () => {
  const { data, error } = useQuery<CurrentUserInvitationsQuery>(
    CurrentUserInvitationsDocument
  )
  console.log(data)

  if (error) {
    console.warn(error)
    return <div>Something went wrong.</div>
  }

  return (
    <section>
      {data?.authenticatedItem?.createdInvitations?.length && (
        <UserInviteList list={data.authenticatedItem.createdInvitations} />
      )}
    </section>
  )
}

export { UserInviteManage }
