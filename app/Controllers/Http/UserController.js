'use strict'

const User = use('App/Models/User')
const { validateAll } = use('Validator')

class UserController {
  async index ({ view,request }) {

      const users = await User.query().paginate(
        request.input('page',1),20
      )
      
      return view.render('users.index',{
          users:users.toJSON()
      })
  }

  async store ({session, request, response }) {
   
    const data = request.only([
      'first_name','last_name',
      'email','phone',
      'address','password'
    ])

    await User.create(data)

    session.flash(
        { success: 'User successfully created' }
    )

    return response.route('users.index')
  }

  async update ({ user, session, request, response }) {
       
      const data = request.only([
        'first_name','last_name',
        'email','phone','address'
      ])

      if(request.input('password') != '')
      {
        data['password'] = await use('Hash').make(
          request.input('password')
        )
      }

      user.merge(data)
      await user.save()
      
      session.flash(
        { success: 'User successfully updated' }
      )
      return response.route('users.index')
  }

  async destroy ({ user, session, response }) {
        
      await user.delete()
    
      session.flash(
        { success: 'User successfully daleted' }
      )

      return response.route('users.index')
  }
}

module.exports = UserController
