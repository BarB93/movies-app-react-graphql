import { Query, Resolver, Mutation, Arg } from 'type-graphql'
import { Movie } from './movie.schema'

@Resolver(() => Movie)
export class MoviesResolver {
  private movie: Movie[] = [
    { id: 1, name: 'Pulp Fiction', genre: 'Crime', directorId: 1 },
    { id: 2, name: '1984', genre: 'Sci-Fi', directorId: 2 },
    { id: 3, name: 'V for vendetta', genre: 'Sci-Fi-Triller', directorId: 3 },
    { id: 4, name: 'Snatch', genre: 'Crime-Comedy', directorId: 4 },
    { id: 5, name: 'Reservoir Dogs', genre: 'Crime', directorId: 1 },
    { id: 6, name: 'The Hateful Eight', genre: 'Crime', directorId: 1 },
    { id: 7, name: 'Inglourious Basterds', genre: 'Crime', directorId: 1 },
    { id: 7, name: 'Lock, Stock and Two Smoking Barrels', genre: 'Crime-Comedy', directorId: 4 },
  ]

  @Query(() => [Movie])
  async getUsers(): Promise<Movie[]> {
    return this.movie
  }

  @Query(() => Movie)
  async getUser(@Arg('id') id: number): Promise<Movie | undefined> {
    const movie = this.movie.find(m => m.id == id)
    return movie
  }

  // @Mutation(() => User)
  // async createUser(@Arg('input') input: UserInput): Promise<User> {
  //   const user = {
  //     id: this.users.length + 1,
  //     ...input,
  //   }

  //   this.users.push(user)
  //   return user
  // }

  // @Mutation(() => User)
  // async updateUser(@Arg('id') id: number, @Arg('input') input: UserInput): Promise<User> {
  //   const user = this.users.find(u => u.id === id)

  //   if (!user) {
  //     throw new Error('User not found')
  //   }

  //   const updatedUser = {
  //     ...user,
  //     ...input,
  //   }

  //   this.users = this.users.map(u => (u.id === id ? updatedUser : u))

  //   return updatedUser
  // }
}
