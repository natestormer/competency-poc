import Link from "next/link"
import { useUser } from "../hooks"
import { Logout } from "./Logout"

const Header = () => {
  const { user } = useUser()

  return (
    <header role="banner">
      <h1>Competency</h1>
      {!user ? <Link href="/login">Login</Link> : <Logout />}
    </header>
  )
}

export { Header }
