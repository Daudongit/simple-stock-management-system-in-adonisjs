'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SaleSchema extends Schema {
  up () {
    this.create('sales', (table) => {
      table.increments()
      table.timestamps()
      table.string('title').unique()
      table.string('buyer',80)
      table.integer('user_id').unsigned()
    })
  }

  down () {
    this.drop('sales')
  }
}

module.exports = SaleSchema
