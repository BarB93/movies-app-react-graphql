import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { MoviesResolver } from './schema/movie/movie.resolvers'

async function main() {
  const schema = await buildSchema({
    resolvers: [MoviesResolver],
    emitSchemaFile: true,
  })

  const app = express()
  const PORT = 5000

  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
    }),
  )

  app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
  })
}

main()
