import { Field, ID, ObjectType } from 'type-graphql'
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { User } from '@/modules/users/database/entities/user'

@Entity('pets')
@ObjectType()
export class Pet extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id!: string

  @Column('text')
  @Field(() => String)
  name!: string

  @ManyToOne(() => User, { nullable: true })
  @Field(() => User)
  user?: User

  @Column('text')
  @Field(() => String)
  userId!: string
}
