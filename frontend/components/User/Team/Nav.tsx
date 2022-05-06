import Link from "next/link"
import { useUser } from "../../../hooks"

const UserTeamNav = () => {
  const { user } = useUser()

  return (
    <nav>
      <ul>
        <li>
          <Link href={`/user/${user?.id}/teams`}>My Teams</Link>
        </li>
        <li>
          <Link href={`/user/${user?.id}/teams/created`}>Created Teams</Link>
        </li>
        <li>
          <Link href={`/user/${user?.id}/teams/managed`}>Managed Teams</Link>
        </li>
        <li>
          <Link href={`/user/${user?.id}/teams/create`}>Create a Team</Link>
        </li>
      </ul>
    </nav>
  )
}

export { UserTeamNav }
