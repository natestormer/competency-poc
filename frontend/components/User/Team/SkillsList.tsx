interface UserTeamSkillsListProps {
  skills: ({
    id: string
    name?: string | null
    description?: string | null
  } | null)[]
}

const UserTeamSkillsList = ({ skills }: UserTeamSkillsListProps) => {
  if (!skills || !skills.length) {
    return <p>No skills</p>
  }

  return (
    <ul
      style={{
        margin: 0,
        padding: 0,
        listStyleType: "none",
      }}
    >
      {skills.map((skill) => {
        if (!skill) return null
        return (
          <li
            key={skill.id}
            style={{
              padding: "1rem",
              borderBottom: "1px solid gray",
            }}
          >
            <h4>{skill.name}</h4>
            {skill.description && <p>{skill.description}</p>}
          </li>
        )
      })}
    </ul>
  )
}

export { UserTeamSkillsList }
