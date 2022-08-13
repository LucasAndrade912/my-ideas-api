import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        name: 'user1',
        email: 'user1@email.com',
        password: 'user1pass',
      },
      {
        name: 'user2',
        email: 'user2@email.com',
        password: 'user2pass',
      },
      {
        name: 'user3',
        email: 'user3@email.com',
        password: 'user3pass',
      },
      {
        name: 'user4',
        email: 'user4@email.com',
        password: 'user4pass',
      },
      {
        name: 'user5',
        email: 'user5@email.com',
        password: 'user5pass',
      },
    ])
  }
}
