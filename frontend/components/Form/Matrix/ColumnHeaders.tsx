import { useLazyQuery, useMutation, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { useContext } from "react"
import {
  CreateLevelsDocument,
  CreateLevelsMutation,
  DeleteLevelsDocument,
  DeleteLevelsMutation,
  LevelsByTeamAndLevelDocument,
  LevelsByTeamAndLevelQuery,
  SkillsByTeamDocument,
  UpdateLevelsDocument,
  UpdateLevelsMutation,
} from "../../../graphql/generated"
import { FormMatrixProviderCtx } from "./Provider"

const FormMatrixColumnHeaders = () => {
  const { query } = useRouter()
  const { columns, setColumns, skillsQuery } = useContext(FormMatrixProviderCtx)
  const [fetchLevelsByTeamAndLevel] = useLazyQuery<LevelsByTeamAndLevelQuery>(
    LevelsByTeamAndLevelDocument
  )
  const [createLevels] = useMutation<CreateLevelsMutation>(CreateLevelsDocument)
  const [updateLevels] = useMutation<UpdateLevelsMutation>(UpdateLevelsDocument)
  const [deleteLevels] = useMutation<DeleteLevelsMutation>(DeleteLevelsDocument)

  const refreshQueriesOnOperation = [
    { query: SkillsByTeamDocument, variables: { teamId: query.teamId } },
  ]

  const skills = skillsQuery.data?.skills

  const handleSaveColumn = async (colIndex: number) => {
    if (!skills) return false

    const newName = columns[colIndex]

    // get all skills in team that have corrosponding level
    const { data } = await fetchLevelsByTeamAndLevel({
      variables: {
        teamId: query.teamId,
        level: colIndex,
      },
    })

    // mutate skills to update name
    if (data?.levels && data.levels.length > 0) {
      const levelUpdateArgs = data.levels.map((level) => ({
        where: {
          id: level.id,
        },
        data: {
          name: newName,
        },
      }))
      await updateLevels({
        variables: {
          data: levelUpdateArgs,
        },
        notifyOnNetworkStatusChange: true,
        refetchQueries: refreshQueriesOnOperation,
      })
    }
  }

  const handleAddColumn = async (newCol: string) => {
    // set column state in Provider
    setColumns([...columns, newCol])

    // if skills exist, create new levels associated with columns
    if (skills) {
      const newLevels = skills.map((skill) => ({
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

  const handleDeleteColumn = async (level: number) => {
    // get all skills in team that have corrosponding level
    const { data } = await fetchLevelsByTeamAndLevel({
      variables: {
        teamId: query.teamId,
        level,
      },
    })
    const levelIds = data?.levels?.map((level) => ({ id: level.id }))

    await deleteLevels({
      variables: {
        whereLevelIds: levelIds,
      },
      notifyOnNetworkStatusChange: true,
      refetchQueries: refreshQueriesOnOperation,
    })

    const newCols = columns.filter((_item, idx) => idx !== level)
    setColumns(newCols)
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
          <button type="button" onClick={() => handleSaveColumn(index)}>
            ✓
          </button>
          <button type="button" onClick={() => handleDeleteColumn(index)}>
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
