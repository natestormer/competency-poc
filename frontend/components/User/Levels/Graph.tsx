import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import {
  UserLevelsByTeamDocument,
  UserLevelsByTeamQuery,
} from "../../../graphql/generated"

interface UserLevelsGraphProps {
  teamId: string
}

const UserLevelsGraph = ({ teamId }: UserLevelsGraphProps) => {
  const { query } = useRouter()
  const { data, loading } = useQuery<UserLevelsByTeamQuery>(
    UserLevelsByTeamDocument,
    {
      variables: {
        userId: query.userId,
        teamId,
      },
    }
  )

  if (loading || !data) return <p>Loading...</p>

  console.log(data)

  const levelCount = data?.team?.levelCount || 10
  const levelScaleModifier = data?.team?.levelScaleModifier || 1
  const maxScale = levelCount * levelScaleModifier

  return (
    <section>
      <ul
        style={{
          display: "flex",
          alignItems: "flex-end",
          margin: 0,
          padding: 0,
          listStyleType: "none",
          borderLeft: "1px solid lightGray",
        }}
      >
        {data?.userLevels?.map((level) => {
          const currentLevel = (level.currentLevel || 0) * levelScaleModifier
          const levelPercentage = (currentLevel / maxScale) * 100

          return (
            <li
              key={level.id}
              style={{
                flex: "1 0 auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
                height: "400px",
                border: "1px solid lightGray",
                borderLeft: "none",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: `${levelPercentage}%`,
                  background: "gray",
                }}
              />
              <h6>{level.skill?.name}</h6>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export { UserLevelsGraph }
