import { Field, ObjectType, InputType } from 'type-graphql'

@ObjectType()
export class Movie {
  @Field()
  id!: number
  @Field()
  name!: string
  @Field()
  genre!: string
  @Field()
  directorId!: number
}
