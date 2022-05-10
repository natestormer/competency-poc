import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { useContext } from "react"
import {
  CreateSkillDocument,
  CreateSkillMutation,
  SkillsByTeamDocument,
} from "../../../graphql/generated"
import { FormMatrixProviderCtx } from "./Provider"

const FormMatrixAdd = () => {
  const { skillsQuery, columns } = useContext(FormMatrixProviderCtx)
  const { query } = useRouter()

  const refreshQueriesOnOperation = [
    { query: SkillsByTeamDocument, variables: { teamId: query.teamId } },
  ]

  const [
    createSkill,
    { loading: createdSkillLoading, error: createSkillError },
  ] = useMutation<CreateSkillMutation>(CreateSkillDocument)

  const handleSkillAdd = async () => {
    const newLevels = columns.map((column, index) => ({
      name: column,
      level: index,
      author: {
        connect: {
          id: query.userId,
        },
      },
      team: {
        connect: {
          id: query.teamId,
        },
      },
    }))
    await createSkill({
      variables: {
        name: `New Skill ${
          skillsQuery.data?.skills ? skillsQuery.data?.skills?.length + 1 : "0"
        }`,
        description: "",
        teamId: query.teamId,
        userId: query.userId,
        levels: newLevels,
      },
      notifyOnNetworkStatusChange: true,
      refetchQueries: refreshQueriesOnOperation,
    })
  }

  return (
    <div
      style={{
        padding: "1rem",
        background: "lightGray",
      }}
    >
      <button
        type="button"
        disabled={createdSkillLoading}
        onClick={handleSkillAdd}
      >
        Add a skill
      </button>
    </div>
  )
}

export { FormMatrixAdd }
