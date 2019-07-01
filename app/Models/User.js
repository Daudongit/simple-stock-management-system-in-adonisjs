'use strict'

const Model = use('Model')

class User extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeCreate', 'User.hashPassword')
  }

  static get computed () {
    return ['fullname']
  }

  getFullname ({ first_name, last_name }) {
    return `${first_name} ${last_name}`
  }
  
}

module.exports = User
