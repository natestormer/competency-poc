import {
  ApolloError,
  OperationVariables,
  QueryResult,
  useQuery,
} from "@apollo/client"
import { useRouter } from "next/router"
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react"
import {
  SkillsByTeamDocument,
  SkillsByTeamQuery,
} from "../../../graphql/generated"

interface FormMatrixProviderContext {
  columns: string[]
  setColumns: Dispatch<SetStateAction<string[]>>
  skillsQuery: {
    data?: SkillsByTeamQuery
    loading?: boolean
    error?: ApolloError
  }
}

const FormMatrixProviderCtx = createContext<FormMatrixProviderContext>({
  columns: [],
  setColumns: () => null,
  skillsQuery: {},
})

interface FormMatrixProviderProps {
  children: ReactNode
}

const FormMatrixProvider = ({ children }: FormMatrixProviderProps) => {
  const [columns, setColumns] = useState<string[]>(["Level 0"])
  const { query } = useRouter()

  const {
    data: savedSkills,
    loading: savedSkillsLoading,
    error: savedSkillsError,
  } = useQuery<SkillsByTeamQuery>(SkillsByTeamDocument, {
    variables: { teamId: query.teamId },
    notifyOnNetworkStatusChange: true,
  })

  // get levels from first skill and sets columns to their name values
  useEffect(() => {
    if (
      savedSkills &&
      savedSkills.skills?.[0] &&
      savedSkills.skills[0].levels &&
      savedSkills.skills[0].levels.length > 0
    ) {
      const savedColumns = savedSkills.skills[0].levels.map(
        (level, index) => level.name?.toString() || `Level ${index}`
      )
      setColumns(savedColumns)
    }
  }, [savedSkills])

  return (
    <FormMatrixProviderCtx.Provider
      value={{
        columns,
        setColumns,
        skillsQuery: {
          data: savedSkills,
          loading: savedSkillsLoading,
          error: savedSkillsError,
        },
      }}
    >
      {children}
    </FormMatrixProviderCtx.Provider>
  )
}

export { FormMatrixProvider, FormMatrixProviderCtx }
