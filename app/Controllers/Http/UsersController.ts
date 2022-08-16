import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateUserValidator from 'App/Validators/CreateUserValidator'
import Redis from '@ioc:Adonis/Addons/Redis'
import Hash from '@ioc:Adonis/Core/Hash'
import User from 'App/Models/User'

export default class UsersController {
  public async index({ response, auth }: HttpContextContract) {
    if (auth.user) {
      const userData = await User.findBy('email', auth.user.email)

      if (userData) {
        const { id, name, email, createdAt, updatedAt } = userData

        return response.ok({ data: { id, name, email, createdAt, updatedAt } })
      }
    }
  }

  public async auth({ request, response, auth }: HttpContextContract) {
    const { authorization } = request.headers()

    if (authorization) {
      const [, data] = authorization.split(' ')
      const dataDecoded = Buffer.from(data!, 'base64').toString('utf-8')
      const [email, password] = dataDecoded.split(':')

      const user = await User.findByOrFail('email', email)

      if (!(await Hash.verify(user.password, password))) {
        return response.unauthorized({ message: 'Invalid credentials' })
      }

      const token = await auth.use('api').generate(user, {
        expiresIn: '7days',
      })

      return response.ok({ message: 'Login completed', token })
    }

    return response.badRequest({ message: 'Send all data' })
  }

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
