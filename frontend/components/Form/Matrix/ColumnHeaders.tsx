import { useContext } from "react"
import { FormMatrixProviderCtx } from "./Provider"

const FormMatrixColumnHeaders = () => {
  const { columns, setColumns } = useContext(FormMatrixProviderCtx)
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
          onClick={() => setColumns([...columns, `Level ${columns.length}`])}
        >
          Add Level
        </button>
      </li>
    </ol>
  )
}

export { FormMatrixColumnHeaders }
