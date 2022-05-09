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
  const [columns, setColumns] = useState<string[]>([])
  const { query } = useRouter()
  const {
    data: savedSkills,
    loading: savedSkillsLoading,
    error: savedSkillsError,
  } = useQuery<SkillsByTeamQuery>(SkillsByTeamDocument, {
    variables: { teamId: query.teamId },
    notifyOnNetworkStatusChange: true,
  })

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
