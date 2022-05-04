import { UserInvitationPageDocument } from "../../../graphql/generated"
import { UserInviteDeleteButton } from "./DeleteButton"
import { UserInviteResendButton } from "./ResendButton"

interface UserInviteListProps {
  list: {
    id: string
    email?: string | null
    created?: string | null
    expires?: string | null
    expired?: boolean | null
    accepted?: string | null
  }[]
}

const UserInviteList = ({ list }: UserInviteListProps) => {
  if (!list) return <p>No invitations</p>

  return (
    <div>
      <h3>Invitations Sent</h3>
      <ul style={{ padding: 0 }}>
        {list.map((item) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid gray",
            }}
          >
            <h4 style={{ flex: "1 0 25%" }}>{item.email}</h4>
            <div style={{ flex: "1 0 25%" }}>
              {item.created && (
                <>
                  Sent: <time dateTime={item.created}>{item.created}</time>
                  {item.expired && <i> Expired</i>}
                </>
              )}
            </div>
            <div style={{ flex: "1 0 25%" }}>
              Accepted:{" "}
              {item.accepted ? (
                <time>{item.accepted}</time>
              ) : (
                <span>Not yet accepted</span>
              )}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                flex: "1 0 4rem",
              }}
            >
              {!item.accepted && (
                <>
                  {!item.expired ? (
                    <UserInviteDeleteButton
                      id={item.id}
                      refreshQueries={[{ query: UserInvitationPageDocument }]}
                    >
                      Delete
                    </UserInviteDeleteButton>
                  ) : (
                    <div />
                  )}
                  <UserInviteResendButton
                    id={item.id}
                    refreshQueries={[{ query: UserInvitationPageDocument }]}
                  >
                    Resend
                  </UserInviteResendButton>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { UserInviteList }
