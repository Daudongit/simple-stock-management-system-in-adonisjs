'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReceiptSchema extends Schema {
  up () {
    this.create('receipts', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('receipts')
  }
}

module.exports = ReceiptSchema
