import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { useContext } from "react"
import {
  CreateSkillDocument,
  CreateSkillMutation,
  DeleteSkillDocument,
  DeleteSkillMutation,
  SkillsByTeamDocument,
  UpdateSkillDocument,
  UpdateSkillMutation,
} from "../../../graphql/generated"
import { FormMatrixProviderCtx } from "./Provider"
import { FormCreateUpdateSkillValue, FormMatrixSkill } from "./Skill"

const FormMatrixList = () => {
  const { skillsQuery } = useContext(FormMatrixProviderCtx)
  const { query } = useRouter()

  const refreshQueriesOnOperation = [
    { query: SkillsByTeamDocument, variables: { teamId: query.teamId } },
  ]

  const [
    createSkill,
    { loading: createdSkillLoading, error: createSkillError },
  ] = useMutation<CreateSkillMutation>(CreateSkillDocument)

  const [updateSkill] = useMutation<UpdateSkillMutation>(UpdateSkillDocument)

  const [deleteSkill, { loading: deleteSkillLoading }] =
    useMutation<DeleteSkillMutation>(DeleteSkillDocument)

  const handleSkillAdd = async () => {
    await createSkill({
      variables: {
        name: `New Skill ${
          skillsQuery.data?.skills ? skillsQuery.data?.skills?.length + 1 : "0"
        }`,
        description: "",
        teamId: query.teamId,
        userId: query.userId,
      },
      notifyOnNetworkStatusChange: true,
      refetchQueries: refreshQueriesOnOperation,
    })
  }

  const handleUpdateSkill = async (data: FormCreateUpdateSkillValue) => {
    await updateSkill({
      variables: {
        name: data.name,
        description: data.description,
        skillId: data.id,
      },
      notifyOnNetworkStatusChange: true,
      refetchQueries: refreshQueriesOnOperation,
    })
  }

  const handleSkillDelete = async (id?: string | null) => {
    if (!id) return false

    await deleteSkill({
      variables: {
        skillId: id,
      },
      notifyOnNetworkStatusChange: true,
      refetchQueries: refreshQueriesOnOperation,
      awaitRefetchQueries: true,
    })
  }
  return (
    <>
      <ol
        style={{
          margin: 0,
          padding: 0,
          listStyleType: "none",
        }}
      >
        {skillsQuery.data?.skills &&
          skillsQuery.data.skills.length > 0 &&
          skillsQuery.data.skills.map((skill) => (
            <li
              key={skill.id}
              style={{
                display: "flex",
                padding: "1rem",
                borderBottom: "1px solid gray",
              }}
            >
              <div
                style={{
                  flex: "0 0 200px",
                  borderRight: "1px solid lightGray",
                }}
              >
                <FormMatrixSkill
                  initialValues={skill}
                  onUpdate={handleUpdateSkill}
                  onDelete={handleSkillDelete}
                  isDeleting={deleteSkillLoading}
                />
              </div>
            </li>
          ))}
      </ol>
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
    </>
  )
}

export { FormMatrixList }
