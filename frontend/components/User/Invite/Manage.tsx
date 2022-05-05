import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import {
  UserInvitationsDocument,
  UserInvitationsQuery,
} from "../../../graphql/generated"
import { FormCreateInvitation } from "../../Form/CreateInvitation"
import { UserInviteList } from "./List"

const UserInviteManage = () => {
  const { query } = useRouter()
  const { data, error } = useQuery<UserInvitationsQuery>(
    UserInvitationsDocument,
    {
      variables: {
        userId: query.id,
      },
    }
  )

  if (error) {
    console.warn(error)
    return <div>Something went wrong.</div>
  }

  return (
    <section>
      <FormCreateInvitation />
      {data?.user?.createdInvitations?.length && (
        <>
          <br />
          <hr />
          <UserInviteList list={data.user.createdInvitations} />
        </>
      )}
    </section>
  )
}

export { UserInviteManage }
