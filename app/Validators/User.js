'use strict'

class User {

  get rules () {
    const rules = {
      first_name: 'required|string',
      last_name: 'required|string',
      phone: 'required',
      email: 'required|email'
      //password_confirmation: 'required_if:password|same:password',
    }

    if(this.ctx.request.method().toLowerCase() == 'post'){
      rules['email'] = 'required|email|unique:users'
      rules['password'] = 'required'
    }

    return rules
  }

  get messages () {
    return {
      'first_name.required': 'You must provide a valid first name.',
      'first_name.string': 'You must provide a valid first name.',
      'last_name.required': 'You must provide a valid last name.',
      'last_name.string': 'You must provide a valid last name.',
      'phone.required':'You must provide a valid phone number',
      'email.required':'You must provide an email address',
      'email.email':'You must provide a valid email address',
      'email.unique':'This email address already exits',
      'password.required':'password is required'
    }
  }

  get validateAll () {
    return true
  }
}

module.exports = User
