import Link from "next/link"
import { useUser } from "../hooks"

const Header = () => {
  const { user } = useUser()
  console.log(user)
  return (
    <header role="banner">
      {!user ? (
        <Link href="/login">Login</Link>
      ) : (
        <button type="button">Log Out</button>
      )}
    </header>
  )
}

export { Header }
