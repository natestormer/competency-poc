import { FormMatrixColumnHeaders } from "./ColumnHeaders"
import { FormMatrixProvider } from "./Provider"
import { FormMatrixList } from "./List"

const FormMatrix = () => {
  return (
    <FormMatrixProvider>
      <section
        style={{
          width: "99vw",
          overflow: "hidden",
          overflowX: "auto",
        }}
      >
        <h3>Team Matrix</h3>
        <FormMatrixColumnHeaders />
        <FormMatrixList />
      </section>
    </FormMatrixProvider>
  )
}

export { FormMatrix }
