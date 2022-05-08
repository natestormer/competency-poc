import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup"

interface FormCreateUpdateSkillValue {
  id?: string | null
  name?: string | null
  description?: string | null
}

interface FormMatrixSkillProps {
  userId?: string
  teamId?: string
  initialValues: FormCreateUpdateSkillValue
  onDelete: (id?: string | null) => void
  isDeleting?: boolean
  onUpdate: (data: FormCreateUpdateSkillValue) => void
}

const FormMatrixSkillSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  description: Yup.string(),
})

const FormMatrixSkill = ({
  initialValues,
  onDelete,
  isDeleting = false,
  onUpdate,
}: FormMatrixSkillProps) => {
  if (!initialValues || !initialValues.id) return null

  return (
    <Formik
      initialValues={{
        name: initialValues?.name || "",
        description: initialValues?.description || "",
      }}
      validationSchema={FormMatrixSkillSchema}
      onSubmit={(values: FormCreateUpdateSkillValue) =>
        onUpdate({
          id: initialValues.id,
          name: values.name,
          description: values.description,
        })
      }
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="name">
              Skill Names
              <br />
              <Field name="name" type="text" placeholder="Skill Name" />
            </label>
          </div>
          <ErrorMessage name="name" />
          <div>
            <label htmlFor="description">
              Description
              <br />
              <Field
                as="textarea"
                name="description"
                placeholder="Skill Name"
              />
            </label>
          </div>
          <ErrorMessage name="description" />
          <button type="submit" disabled={isSubmitting}>
            Update
          </button>{" "}
          <button
            type="button"
            disabled={isDeleting}
            onClick={() => onDelete(initialValues.id)}
          >
            X
          </button>
        </Form>
      )}
    </Formik>
  )
}

export { FormMatrixSkill }
export type { FormCreateUpdateSkillValue }
