'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JournalSchema extends Schema {
  up () {
    this.create('journals', (table) => {
      table.increments()
      table.timestamps()
      table.string('type')//credit/debit
      table.integer('user_id').unsigned()
    })
  }

  down () {
    this.drop('journals')
  }
}

module.exports = JournalSchema
