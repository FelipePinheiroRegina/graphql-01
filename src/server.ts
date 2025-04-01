import 'reflect-metadata'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { UsersResolver } from './modules/users/graphql/resolvers/users-resolver'
import { AppDataSource } from 'data-source'

async function init() {
  await AppDataSource.initialize()
  const app = express()
  const port = 4010

  const schema = await buildSchema({
    resolvers: [UsersResolver],
  })

  const apolloServer = new ApolloServer({
    schema,
  })

  await apolloServer.start()

  apolloServer.applyMiddleware({ app })

  app.listen(port, () => console.log('Running server on port ', port))
}

init()
