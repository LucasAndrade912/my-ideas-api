import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateIdeaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string.optional({ trim: true }),
    description: schema.string.optional({ trim: true }),
    durationTime: schema.enum.optional(['short', 'medium', 'long']),
  })
}
