'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InvoiceSchema extends Schema {
  up () {
    this.create('invoices', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('invoices')
  }
}

module.exports = InvoiceSchema
