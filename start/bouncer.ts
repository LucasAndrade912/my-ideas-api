import Bouncer from '@ioc:Adonis/Addons/Bouncer'
import Idea from 'App/Models/Idea'
import User from 'App/Models/User'

export const { actions } = Bouncer.define('viewIdea', (user: User, idea: Idea) => {
  return idea.userId === user.id
}).define('deleteIdea', (user: User, idea: Idea) => {
  return idea.userId === user.id
}).define('updateIdea', (user: User, idea: Idea) => {
  return idea.userId === user.id
})

export const { policies } = Bouncer.registerPolicies({})
