import Route from '@ioc:Adonis/Core/Route'

Route.get('login', 'UsersController.auth')
Route.post('signup', 'UsersController.store')
Route.get('me', 'UsersController.index').middleware('auth')
