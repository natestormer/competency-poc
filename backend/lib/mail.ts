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

// @Todo: send user registration email

// send email with token for password reset
async function sendPasswordResetEmail(resetToken: string, to: string) {
  const info = await transporter.sendMail({
    to,
    from: "test@example.com",
    subject: "Your password reset token!",
    html: basicTemplate(`
      Your Password Reset Token is here!

      <a href="${process.env.FRONTEND_URL}/reset-password?token=${resetToken}">Click here to reset</a>
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
}

// send email with
async function sendUserInvitationEmail(
  token: string,
  to: string,
  expires: string
) {
  const info = await transporter.sendMail({
    to,
    from: "test@example.com",
    subject: "Your have been invited to Competency!",
    html: basicTemplate(`
      You have been invited to join Competency! Click the link below to create an account.

      <a href="${process.env.FRONTEND_URL}/invitation/${token}?email=${to}">Register Now!</a>

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
}

export { sendPasswordResetEmail, sendUserInvitationEmail }
