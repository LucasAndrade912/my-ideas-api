import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Idea from 'App/Models/Idea'

export default class extends BaseSeeder {
  public async run() {
    await Idea.createMany([
      {
        title: 'Pomodoro App',
        description: 'A Pomodoro app to aid in concentration',
        durationTime: 'medium',
        userId: 1,
      },
      {
        title: 'REM to PX',
        description: 'Extension to convert REM to PX',
        durationTime: 'short',
        userId: 1,
      },
      {
        title: 'Google Extension',
        description: 'Extension to convert minuscule to uppercase',
        durationTime: 'short',
        userId: 4,
      },
      {
        title: 'Blog',
        description: 'Create a blog on topics I like',
        durationTime: 'long',
        userId: 2,
      },
    ])
  }
}
