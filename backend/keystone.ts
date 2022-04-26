/*
Welcome to Keystone! This file is what keystone uses to start the app.

It looks at the default export, and expects a Keystone config object.

You can find all the config options in our docs here: https://keystonejs.com/docs/apis/config
*/
import "dotenv/config"
import { config } from "@keystone-6/core"

// Look in the schema file for how we define our lists, and how users interact with them through graphql or the Admin UI
import { schemas } from "./schemas"

// Keystone auth is configured separately - check out the basic auth setup we are importing from our auth file.
import { withAuth, session } from "./auth"

export default withAuth(
  // Using the config function helps typescript guide you to the available options.
  config({
    // the db sets the database provider - we're using postgresql
    db: {
      provider: "postgresql",
      url: process.env.DATABASE_URI as string, // @Todo: set local postgress db as backup
      // async onConnect(context) => {
      //   // do some stuff here
      // },
      // Enable logging from the Prisma client.
      enableLogging: true,
      // Determines whether to use migrations or automatically force-update the database with the latest schema and potentially lose data.
      useMigrations: false,
      idField: { kind: "uuid" },
    },
    // This config allows us to set up features of the Admin UI https://keystonejs.com/docs/apis/config#ui
    ui: {
      // For our starter, we check that someone has session data before letting them see the Admin UI.
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists: schemas,
    session,
  })
)
