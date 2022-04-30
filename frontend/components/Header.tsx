import Link from "next/link"
import { useUser } from "../hooks"
import { Logout } from "./Logout"

const Header = () => {
  const { user } = useUser()

  return (
    <header role="banner">
      <h1>
        <Link href="/">Competency</Link>
      </h1>
      {!user ? (
        <>
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign Up</Link>
        </>
      ) : (
        <Logout />
      )}
    </header>
  )
}

export { Header }
