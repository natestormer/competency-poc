import { useMutation } from "@apollo/client"
import { Field, Form, Formik } from "formik"
import {
  UpdateLevelDocument,
  UpdateLevelMutation,
} from "../../../graphql/generated"

interface FormMatrixLevelValues {
  description?: string | null
}

interface FormMatrixLevelProps {
  levelId: string
  initialDescription?: string | null
}

const FormMatrixLevel = ({
  levelId,
  initialDescription = "",
}: FormMatrixLevelProps) => {
  const [updateLevel] = useMutation<UpdateLevelMutation>(UpdateLevelDocument)

  return (
    <Formik
      initialValues={{
        description: initialDescription,
      }}
      onSubmit={async (values: FormMatrixLevelValues, { setSubmitting }) => {
        await updateLevel({
          variables: {
            levelId,
            description: values.description,
          },
        })

        setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field
              as="textarea"
              name="description"
              placeholder="Description"
              style={{ minHeight: "120px" }}
            />
          </div>
          <button type="submit" disabled={isSubmitting}>
            ✓
          </button>
        </Form>
      )}
    </Formik>
  )
}

export { FormMatrixLevel }
