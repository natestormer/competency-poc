import { checkbox } from "@keystone-6/core/fields"

const permissionFields = {
  canSeeOtherUsers: checkbox({
    defaultValue: false,
    label: "User can query other users",
  }),
  canManageUsers: checkbox({
    defaultValue: false,
    label: "User can Edit other users",
  }),
  canManageRoles: checkbox({
    defaultValue: false,
    label: "User can CRUD roles",
  }),
}

type Permission = keyof typeof permissionFields

const permissionsList: Permission[] = Object.keys(
  permissionFields
) as Permission[]

export type { Permission }
export { permissionFields, permissionsList }
