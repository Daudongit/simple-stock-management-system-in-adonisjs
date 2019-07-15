'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateItemSchema extends Schema {
  up () {
    this.create('items', (table) => {
      table.increments()
      table.timestamps()
      table.string('name',80).unique().notNullable()
      table.string('price',25)
    })
  }

  down () {
    this.drop('items')
  }
}

module.exports = CreateItemSchema
