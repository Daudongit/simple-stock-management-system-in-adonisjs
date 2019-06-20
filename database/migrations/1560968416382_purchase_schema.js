'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PurchaseSchema extends Schema {
  up () {
    this.create('purchases', (table) => {
      table.increments()
      table.timestamps()
      table.string('seller',80) //product seller
      table.integer('user_id').unsigned()//buyer staff
    })
  }

  down () {
    this.drop('purchases')
  }
}

module.exports = PurchaseSchema
