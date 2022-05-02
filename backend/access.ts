import { permissionsList } from "./schemas/fields"
import { ListAccessArgs } from "./types"

export function isSignedIn({ session }: ListAccessArgs): boolean {
  return !!session
}

// generate permission helper functions from permission list
const generatedPermissions = Object.fromEntries(
  permissionsList.map((permission) => [
    permission,
    function ({ session }: ListAccessArgs) {
      return !!session?.data.role?.[permission]
    },
  ])
)

// permissions check => true | false
export const permissions = {
  ...generatedPermissions,
}
