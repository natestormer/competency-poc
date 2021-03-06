import Link from "next/link"
import { useRouter } from "next/router"
import { useUser } from "../hooks"
import { Logout } from "./Logout"

const Header = () => {
  const { user } = useUser()
  const { pathname } = useRouter()

  return (
    <header role="banner">
      <h1>
        <Link href="/">Competency</Link>
      </h1>
      {!user ? (
        <>
          <Link href={`/login?next=${pathname}`}>Login</Link>
          {" / "}
          <Link href="/signup">Sign Up</Link>
        </>
      ) : (
        <>
          <Link href={`/user/${user.id}`}>Dashboard</Link>
          {" / "}
          <Link href={`/user/${user.id}/teams`}>Teams</Link>
          {" / "}
          <Link href={`/user/${user.id}/levels`}>Levels</Link>
          {" / "}
          <Link href={`/user/${user.id}/invitations`}>Invitations</Link>
          {" / "}
          <Logout />
        </>
      )}
    </header>
  )
}

export { Header }
