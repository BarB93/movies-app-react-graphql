import express from 'express'
import { graphqlHTTP } from 'express-graphql'
// import schema, { root } from './schema/schema'
import schema from './schema/schema'

const app = express()
const PORT = 5000

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    // rootValue: root,
  }),
)

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`)
})
