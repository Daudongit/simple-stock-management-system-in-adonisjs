'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.timestamps()
      table.string('first_name', 80).notNullable()
      table.string('last_name', 80).notNullable()
      table.string('phone', 25)
      table.string('email', 254)
      table.string('password', 60).notNullable()
      table.text('address')
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
