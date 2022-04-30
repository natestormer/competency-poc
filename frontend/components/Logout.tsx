import { useMutation } from "@apollo/client"
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
  const [logout] = useMutation<LogoutMutation>(LogoutDocument, {
    refetchQueries: [{ query: CurrentUserDocument }],
  })

  const handleLogout = () => {
    logout()
  }

  return (
    <button type="button" onClick={handleLogout}>
      {children}
    </button>
  )
}

export { Logout }
