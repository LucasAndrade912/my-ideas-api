import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateUserValidator from 'App/Validators/CreateUserValidator'
import User from 'App/Models/User'

export default class UsersController {
  public async store({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreateUserValidator)

    const user = await User.findBy('email', payload.email)

    if (user) {
      return response.unprocessableEntity({ message: 'User already registered' })
    }

    const { id, name, email } = await User.create(payload)

    return response.created({
      message: 'User created',
      data: { id, name, email },
    })
  }
}
