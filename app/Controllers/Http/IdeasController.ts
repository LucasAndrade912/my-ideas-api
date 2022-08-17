import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Idea from 'App/Models/Idea'

export default class IdeasController {
  public async show({ request, response, auth, bouncer }: HttpContextContract) {
    if (auth.user) {
      const { id } = request.params()

      const idea = await Idea.find(id)

      if (!idea) {
        return response.notFound({ message: 'Idea not exists' })
      }

      try {
        await bouncer.authorize('viewIdea', idea)

        return response.ok({ data: idea })
      } catch {
        return response.unauthorized({
          message: 'You are not allowed to view this Idea',
        })
      }
    }
  }
}
