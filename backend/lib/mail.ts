import { createTransport, getTestMessageUrl } from "nodemailer"

const transporter = createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
})

function basicTemplate(text: string): string {
  return `
    <div style="
      border: 1px solid black;
      padding: 20px;
      font-family: sans-serif;
      line-height: 2;
      font-size: 20px;
    ">
      <h2>Hello There!</h2>
      <p>${text}</p>
    </div>
  `
}

interface sendMailArgs {
  to: string
  subject: string
  body: string
}

function sendMail({ to, subject, body }: sendMailArgs) {
  const mail = {
    to,
    from: "test@example.com",
    subject,
    html: body,
  }

  return transporter.sendMail(mail)
}

// @Todo: send user registration email

// send email with token for password reset
async function sendPasswordResetEmail(resetToken: string, to: string) {
  const tokenizedUrl = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`
  console.info(`
    Sending password reset email...

    Tokenized URL: ${tokenizedUrl}
  `)

  try {
    const info = await sendMail({
      to,
      subject: "Your password reset token!",
      body: basicTemplate(`
      Your Password Reset Token is here!

      <a href="${tokenizedUrl}">Click here to reset your password.</a>
    `),
    })
    // log URL to mail trap account if we're sending to Ethereal
    if (
      process.env.MAIL_USER &&
      process.env.MAIL_USER.includes("ethereal.email")
    ) {
      console.log(
        `Message sent! Preview at: ${getTestMessageUrl(info) || "Not found"}`
      )
    }
  } catch (error) {
    console.warn(`Error sending password reset email: ${error}`)
  }
}

// end re-invite email with updated invitation token
async function sendUserReInvitationEmail(
  token: string,
  to: string,
  expires: string
) {
  const tokenizedUrl = `${
    process.env.FRONTEND_URL
  }/invitation/${token}?email=${encodeURIComponent(to)}`
  console.info(`
    Sending re-invitation email...

    Tokenized URL: ${tokenizedUrl}
  `)

  try {
    const info = await sendMail({
      to,
      subject: "Your invitation has been renewed",
      body: basicTemplate(`
      You have been invited to join Competency! Click the link below to create an account.

      <a href="${tokenizedUrl}">Create your account!</a>

      This invitation expires at ${expires}
    `),
    })
    // log URL to mail trap account if we're sending to Ethereal
    if (
      process.env.MAIL_USER &&
      process.env.MAIL_USER.includes("ethereal.email")
    ) {
      console.log(
        `Message sent! Preview at: ${getTestMessageUrl(info) || "Not found"}`
      )
    }
  } catch (error) {
    console.warn(`Error sending re-invitation email: ${error}`)
  }
}

// send email with link to redeem invitaiton token
async function sendUserInvitationEmail(
  token: string,
  to: string,
  expires: string
) {
  const tokenizedUrl = `${process.env.FRONTEND_URL}/invitation/${token}?email=${to}`
  console.info(`
    Sending invitation email...

    Tokenized URL: ${tokenizedUrl}
  `)

  try {
    const info = await sendMail({
      to,
      subject: "You have been invited to Competency!",
      body: basicTemplate(`
      You have been invited to join Competency! Click the link below to create an account.

      <a href="${tokenizedUrl}">Create your account!</a>

      This invitation expires at ${expires}
    `),
    })
    // log URL to mail trap account if we're sending to Ethereal
    if (
      process.env.MAIL_USER &&
      process.env.MAIL_USER.includes("ethereal.email")
    ) {
      console.log(
        `Message sent! Preview at: ${getTestMessageUrl(info) || "Not found"}`
      )
    }
  } catch (error) {
    console.warn(`Error sending invitation email: ${error}`)
  }
}

export {
  sendPasswordResetEmail,
  sendUserInvitationEmail,
  sendUserReInvitationEmail,
}
