import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { ReactNode } from "react"
import {
  CurrentUserDocument,
  LogoutDocument,
  LogoutMutation,
} from "../graphql/generated"

interface LogoutProps {
  children?: ReactNode
}
const Logout = ({ children = "Log Out" }: LogoutProps) => {
  const { push } = useRouter()
  const [logout] = useMutation<LogoutMutation>(LogoutDocument, {
    refetchQueries: [{ query: CurrentUserDocument }],
  })

  const handleLogout = async () => {
    await logout()
    push("/login")
  }

  return (
    <button type="button" onClick={handleLogout}>
      {children}
    </button>
  )
}

export { Logout }
