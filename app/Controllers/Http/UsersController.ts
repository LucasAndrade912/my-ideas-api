import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateUserValidator from 'App/Validators/CreateUserValidator'
import Redis from '@ioc:Adonis/Addons/Redis'
import User from 'App/Models/User'

export default class UsersController {
  public async store({ request, response, auth }: HttpContextContract) {
    const payload = await request.validate(CreateUserValidator)

    const user = await User.findBy('email', payload.email)

    if (user) {
      return response.unprocessableEntity({ message: 'User already registered' })
    }

    const newUser = await User.create(payload)
    const { id, name, email, password } = newUser

    await Redis.set(`user-${id}`, JSON.stringify({ id, name, email, password }))
    const token = await auth.use('api').generate(newUser, {
      expiresIn: '7days',
    })

    return response.created({
      message: 'User created',
      data: { id, name, email },
      token,
    })
  }
}
