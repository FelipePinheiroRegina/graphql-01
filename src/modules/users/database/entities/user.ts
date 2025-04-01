import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'
import bcrypt from 'bcryptjs'
import { Field, ID, ObjectType } from 'type-graphql'
import { Pet } from '@/modules/pets/database/entities/pet'

@Entity('users')
@ObjectType()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id!: string

  @Column('text')
  @Field(() => String)
  firstname!: string

  @Column('text')
  @Field(() => String)
  lastname!: string

  @Column({ type: 'text', unique: true })
  @Field(() => String)
  email!: string

  @Field(() => [Pet])
  pets!: Pet[]

  password!: string

  @Column('text')
  password_hash!: string

  @BeforeInsert()
  private async hashPassword() {
    this.password_hash = await bcrypt.hash(this.password, 8)
  }
}
