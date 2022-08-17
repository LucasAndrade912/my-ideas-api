import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateIdeaValidator from 'App/Validators/CreateIdeaValidator'
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

  public async store({ request, response, auth }: HttpContextContract) {
    if (auth.user) {
      const payload = await request.validate(CreateIdeaValidator)

      const idea = await Idea.create({
        title: payload.title,
        description: payload.description,
        durationTime: payload.durationTime as 'short' | 'medium' | 'long',
        userId: auth.user.id,
      })

      return response.created({ message: 'Idea created', data: idea })
    }
  }
}
