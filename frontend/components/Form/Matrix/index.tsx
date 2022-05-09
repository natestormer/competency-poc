import { useMutation, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"
import {
  CreateSkillDocument,
  CreateSkillMutation,
  DeleteSkillDocument,
  DeleteSkillMutation,
  SkillsByTeamDocument,
  SkillsByTeamQuery,
  UpdateSkillDocument,
  UpdateSkillMutation,
} from "../../../graphql/generated"
import { FormCreateUpdateSkillValue, FormMatrixSkill } from "./Skill"

const FormMatrix = () => {
  const [cols, setCols] = useState<string[]>([])

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

  const [updateSkill] = useMutation<UpdateSkillMutation>(UpdateSkillDocument)

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
    <section
      style={{
        width: "99vw",
        overflow: "hidden",
        overflowX: "auto",
      }}
    >
      <h3>Team Matrix</h3>
      <ol
        style={{
          display: "flex",
          margin: 0,
          padding: 0,
          listStyleType: "none",
          borderTop: "1px solid gray",
        }}
      >
        <li
          style={{
            flex: "0 0 200px",
            padding: "1rem",
          }}
        >
          Skill
        </li>
        {cols.map((col, index) => (
          <li
            key={`col-${index}`}
            style={{
              padding: "1rem",
            }}
          >
            <input
              name={`col-${index}`}
              type="text"
              value={col}
              onChange={(event) => {
                const val = event.target.value
                const newCols = cols.map((item, idx) =>
                  index === idx ? val : item
                )
                setCols(newCols)
              }}
            />
            <button
              type="button"
              onClick={() => {
                console.log("clicked")
                const newCols = cols.filter((_item, idx) => idx !== index)
                setCols(newCols)
              }}
            >
              X
            </button>
          </li>
        ))}
        <li
          style={{
            padding: "1rem",
          }}
        >
          <button
            type="button"
            onClick={() => setCols([...cols, `Column ${cols.length}`])}
          >
            Add Column
          </button>
        </li>
      </ol>
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
    </section>
  )
}

export { FormMatrix }
