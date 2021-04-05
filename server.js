import database from './database.js'
import makeApp from './app.js'
const app = makeApp(database)
const app = makeApp({
  getUser: () => {},
  createUser: () => {}
})

app.listen(8080, () => console.log("listening on port 8080"))