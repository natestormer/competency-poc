import { useMutation, useQuery } from "@apollo/client"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useRouter } from "next/router"
import { useState } from "react"
import * as Yup from "Yup"

import {
  AddUserAsTeamMemberDocument,
  AddUserAsTeamMemberMutation,
  UsersNotInTeamDocument,
  UsersNotInTeamQuery,
  UserTeamsTeamInvitePageDocument,
  UserTeamsTeamInvitePageQuery,
} from "../../graphql/generated"

interface FormInviteTeamUserValues {
  id: string
}

const FormInviteTeamUserSchema = Yup.object().shape({
  id: Yup.string().required("Please select a user"),
})

const FormInviteTeamUser = () => {
  const { query } = useRouter()
  const [success, setSuccess] = useState<boolean>(false)
  const { data: teamData } = useQuery<UserTeamsTeamInvitePageQuery>(
    UserTeamsTeamInvitePageDocument,
    {
      variables: {
        teamId: query.teamId,
      },
    }
  )
  const { data: usersData } = useQuery<UsersNotInTeamQuery>(
    UsersNotInTeamDocument,
    {
      variables: { teamId: query.teamId },
    }
  )
  const [addUserAsTeamMember, { error, data: addUserAsTeamMemberResData }] =
    useMutation<AddUserAsTeamMemberMutation>(AddUserAsTeamMemberDocument)

  return (
    <Formik
      initialValues={{
        id: "",
      }}
      validationSchema={FormInviteTeamUserSchema}
      onSubmit={async (
        { id }: FormInviteTeamUserValues,
        { setSubmitting, resetForm }
      ) => {
        await addUserAsTeamMember({
          variables: {
            userId: id,
            teamId: query.teamId,
          },
        })
        setSubmitting(false)
        setSuccess(true)
        resetForm({ values: { id: "" } })
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <h2>Invite a User to {teamData?.team?.name || "this Team"}</h2>
          {error && <div>{error.message}</div>}
          {success && (
            <p>
              {addUserAsTeamMemberResData?.updateUser?.fullName || "User"} added
              to{" "}
              {addUserAsTeamMemberResData?.updateUser?.assignedTeams?.[0].name}
            </p>
          )}
          <div>
            <label htmlFor="id">
              Users
              <Field as="select" id="id" name="id">
                <option value="">Select a user</option>
                {usersData?.users?.map((user) => (
                  <option value={user.id} key={user.id}>
                    {user.fullName}
                  </option>
                ))}
              </Field>
            </label>
          </div>
          <ErrorMessage name="id">{(msg) => <div>{msg}</div>}</ErrorMessage>
          <br />
          <button type="submit" disabled={isSubmitting}>
            Add User
          </button>
        </Form>
      )}
    </Formik>
  )
}

export { FormInviteTeamUser }
