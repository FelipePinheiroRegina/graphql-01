import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'postgres',
  port: 5432,
  host: 'localhost',
  username: 'docker',
  password: 'docker',
  database: 'graphql',
  logging: true,
  synchronize: true,
  entities: ['./src/modules/**/database/entities/*.ts'],
})
