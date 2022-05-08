import { TypedDocumentNode, useMutation } from "@apollo/client"
import { ErrorMessage, Field, Form, Formik } from "formik"
import {
  UpdateSkillDocument,
  UpdateSkillMutation,
} from "../../../graphql/generated"
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
  refetchQueryOnOperation?: {
    query: TypedDocumentNode
    variables: { [key: string]: any }
  }[]
  onDelete: (id?: string | null) => void
  isDeleting?: boolean
}

const FormMatrixSkillSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  description: Yup.string(),
})

const FormMatrixSkill = ({
  initialValues,
  refetchQueryOnOperation,
  onDelete,
  isDeleting = false,
}: FormMatrixSkillProps) => {
  const [updateSkill] = useMutation<UpdateSkillMutation>(UpdateSkillDocument)

  if (!initialValues || !initialValues.id) return null

  // on form submit, update the fields of current field by ID
  // then refresh queries passed to component
  const handleSubmit = async (values: FormCreateUpdateSkillValue) => {
    await updateSkill({
      variables: {
        name: values.name,
        description: values.description,
        skillId: initialValues.id,
      },
      notifyOnNetworkStatusChange: true,
      refetchQueries: refetchQueryOnOperation,
    })
  }

  return (
    <Formik
      initialValues={{
        name: initialValues?.name || "",
        description: initialValues?.description || "",
      }}
      validationSchema={FormMatrixSkillSchema}
      onSubmit={(values: FormCreateUpdateSkillValue) => handleSubmit(values)}
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
