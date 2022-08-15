import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateUserValidator from 'App/Validators/CreateUserValidator'
import Redis from '@ioc:Adonis/Addons/Redis'
import User from 'App/Models/User'

export default class UsersController {
  public async store({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreateUserValidator)

    const user = await User.findBy('email', payload.email)

    if (user) {
      return response.unprocessableEntity({ message: 'User already registered' })
    }

    const { id, name, email, password } = await User.create(payload)
    await Redis.set(`user-${id}`, JSON.stringify({ id, name, email, password }))

    return response.created({
      message: 'User created',
      data: { id, name, email },
    })
  }
}
