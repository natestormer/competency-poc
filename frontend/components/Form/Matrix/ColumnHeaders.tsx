import { useMutation, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { useContext } from "react"
import {
  CreateLevelsDocument,
  CreateLevelsMutation,
  SkillsByTeamDocument,
} from "../../../graphql/generated"
import { FormMatrixProviderCtx } from "./Provider"

const FormMatrixColumnHeaders = () => {
  const { query } = useRouter()
  const { columns, setColumns, skillsQuery } = useContext(FormMatrixProviderCtx)
  const [createLevels] = useMutation<CreateLevelsMutation>(CreateLevelsDocument)

  const refreshQueriesOnOperation = [
    { query: SkillsByTeamDocument, variables: { teamId: query.teamId } },
  ]

  const handleAddColumn = async (newCol: string) => {
    setColumns([...columns, newCol])

    if (skillsQuery.data && skillsQuery.data?.skills) {
      const newLevels = skillsQuery.data.skills.map((skill) => ({
        name: newCol,
        level: columns.length,
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
        skill: {
          connect: {
            id: skill.id,
          },
        },
      }))

      await createLevels({
        variables: {
          levels: newLevels,
        },
        notifyOnNetworkStatusChange: true,
        refetchQueries: refreshQueriesOnOperation,
      })
    }
  }

  return (
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
      {columns.map((col, index) => (
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
              const newCols = columns.map((item, idx) =>
                index === idx ? val : item
              )
              setColumns(newCols)
            }}
          />
          <button type="button">✓</button>
          <button
            type="button"
            onClick={() => {
              console.log("clicked")
              const newCols = columns.filter((_item, idx) => idx !== index)
              setColumns(newCols)
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
          onClick={() => handleAddColumn(`Level ${columns.length}`)}
        >
          Add Level
        </button>
      </li>
    </ol>
  )
}

export { FormMatrixColumnHeaders }
