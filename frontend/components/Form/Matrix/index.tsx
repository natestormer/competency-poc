import { useMutation, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import {
  CreateSkillDocument,
  CreateSkillMutation,
  DeleteSkillDocument,
  DeleteSkillMutation,
  SkillsByTeamDocument,
  SkillsByTeamQuery,
} from "../../../graphql/generated"
import { FormMatrixSkill } from "./Skill"

const FormMatrix = () => {
  const { query } = useRouter()
  const refreshQueriesOnOperation = [
    { query: SkillsByTeamDocument, variables: { teamId: query.teamId } },
  ]

  const { data: savedSkills, loading: savedSkillsLoading } =
    useQuery<SkillsByTeamQuery>(SkillsByTeamDocument, {
      variables: { teamId: query.teamId },
      notifyOnNetworkStatusChange: true,
    })

  const [
    createSkill,
    { loading: createdSkillLoading, error: createSkillError },
  ] = useMutation<CreateSkillMutation>(CreateSkillDocument)

  const [deleteSkill, { loading: deleteSkillLoading }] =
    useMutation<DeleteSkillMutation>(DeleteSkillDocument)

  const handleSkillAdd = async () => {
    await createSkill({
      variables: {
        name: `New Skill ${
          savedSkills?.skills ? savedSkills?.skills?.length + 1 : "0"
        }`,
        description: "",
        teamId: query.teamId,
        userId: query.userId,
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
    <section>
      <h3>Team Matrix</h3>
      <ol
        style={{
          margin: 0,
          padding: 0,
          listStyleType: "none",
        }}
      >
        {savedSkills?.skills &&
          savedSkills.skills.length > 0 &&
          savedSkills.skills.map((skill) => (
            <li
              key={skill.id}
              style={{
                padding: "1rem",
                borderBottom: "1px solid gray",
              }}
            >
              <FormMatrixSkill
                initialValues={skill}
                onDelete={handleSkillDelete}
                isDeleting={deleteSkillLoading}
              />
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
    </section>
  )
}

export { FormMatrix }
