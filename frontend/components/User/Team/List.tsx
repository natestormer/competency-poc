import Link from "next/link"
import { ReactNode } from "react"
import { useUser } from "../../../hooks"

interface UserTeamListProps {
  list?:
    | ({
        id?: string
        name?: string | null
        currentUserIsAuthor?: boolean | null
        currentUserIsManager?: boolean | null
      } | null)[]
    | null
  emptyMessage?: string | ReactNode
}

const UserTeamList = ({
  list,
  emptyMessage = "No items found",
}: UserTeamListProps) => {
  const { user } = useUser()
  if (!list) return <p>{emptyMessage}</p>

  return (
    <div>
      <h3>Teams</h3>
      <ul style={{ padding: 0 }}>
        {list.map((item) => {
          if (item) {
            return (
              <li key={item.id}>
                <Link href={`/user/${user?.id}/teams/${item.id}`} passHref>
                  <a
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderBottom: "1px solid gray",
                    }}
                  >
                    <h4 style={{ flex: "1 0 25%" }}>{item.name}</h4>
                    <div style={{ flex: "1 0 25%" }}>
                      {item.currentUserIsAuthor && <span>Author</span>}
                    </div>
                    <div style={{ flex: "1 0 25%" }}>
                      {item.currentUserIsManager && <span>Manager</span>}
                    </div>
                  </a>
                </Link>
              </li>
            )
          }
        })}
      </ul>
    </div>
  )
}

export { UserTeamList }
