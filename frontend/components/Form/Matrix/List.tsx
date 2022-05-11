import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { useContext } from "react"
import {
  CreateSkillDocument,
  CreateSkillMutation,
  DeleteLevelsDocument,
  DeleteLevelsMutation,
  DeleteSkillDocument,
  DeleteSkillMutation,
  SkillsByTeamDocument,
  UpdateSkillDocument,
  UpdateSkillMutation,
} from "../../../graphql/generated"
import { FormMatrixLevel } from "./Level"
import { FormMatrixProviderCtx } from "./Provider"
import { FormCreateUpdateSkillValue, FormMatrixSkill } from "./Skill"

const FormMatrixList = () => {
  const { skillsQuery } = useContext(FormMatrixProviderCtx)
  const { query } = useRouter()

  const refreshQueriesOnOperation = [
    { query: SkillsByTeamDocument, variables: { teamId: query.teamId } },
  ]

  const [updateSkill] = useMutation<UpdateSkillMutation>(UpdateSkillDocument)

  const [deleteSkill, { loading: deleteSkillLoading }] =
    useMutation<DeleteSkillMutation>(DeleteSkillDocument)

  const [deleteLevels] = useMutation<DeleteLevelsMutation>(DeleteLevelsDocument)

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

  const handleSkillDelete = async (
    id?: string | null,
    levelIds?: string[] | null
  ) => {
    if (!id) return false

    await deleteSkill({
      variables: {
        skillId: id,
      },
      notifyOnNetworkStatusChange: true,
      refetchQueries: refreshQueriesOnOperation,
      awaitRefetchQueries: true,
    })

    if (levelIds && levelIds.length > 0) {
      const levelIdArgs = levelIds.map((id) => ({ id }))
      deleteLevels({
        variables: {
          whereLevelIds: levelIdArgs,
        },
      })
    }
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
                  onDelete={() =>
                    handleSkillDelete(
                      skill.id,
                      skill.levels?.map((level) => level.id)
                    )
                  }
                  isDeleting={deleteSkillLoading}
                />
              </div>
              <ol
                style={{
                  display: "flex",
                  margin: 0,
                  padding: 0,
                  listStyleType: "none",
                }}
              >
                {skill.levels &&
                  skill.levels.length > 0 &&
                  skill.levels.map((level) => (
                    <li
                      key={level.id}
                      style={{
                        flex: "0 0 200px",
                        padding: "1rem",
                        borderRight: "1px solid lightGray",
                      }}
                    >
                      <small>{level.name}</small>
                      <br />
                      <FormMatrixLevel
                        levelId={level.id}
                        initialDescription={level.description}
                      />
                    </li>
                  ))}
              </ol>
            </li>
          ))}
      </ol>
    </>
  )
}

export { FormMatrixList }
