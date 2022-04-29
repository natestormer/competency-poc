const FormsLogin = () => {
  return (
    <form method="post">
      <fieldset>
        <p>Login Form</p>
        <label htmlFor="email">
          <input type="email" name="email" id="email" />
        </label>
      </fieldset>
    </form>
  )
}

export { FormsLogin }
