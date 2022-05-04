import {
  BaseItem,
  BaseKeystoneTypeInfo,
  KeystoneContext,
} from "@keystone-6/core/types"

const allUserTeams = async (
  parent: any,
  args: any,
  context: KeystoneContext<BaseKeystoneTypeInfo>
): Promise<BaseItem[]> => {
  const authoredTeams = await context.db.Team.findMany({
    where: { author: { email: { equals: parent.email } } },
  })
  const managedTeams = await context.db.Team.findMany({
    where: {
      managers: { some: { email: { in: parent.email } } },
    },
  })
  const memberTeams = await context.db.Team.findMany({
    where: { members: { some: { email: { in: parent.email } } } },
  })

  const allTeams = [...authoredTeams, ...managedTeams, ...memberTeams]

  const uniqueIds: any[] = []
  const dedupedUserTeams = allTeams.filter((element) => {
    const isDuplicate = uniqueIds.includes(element.id)

    if (!isDuplicate) {
      uniqueIds.push(element.id)
      return true
    }

    return false
  })

  return dedupedUserTeams
}

export { allUserTeams }
