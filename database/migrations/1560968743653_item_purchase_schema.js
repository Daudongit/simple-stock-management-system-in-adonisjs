'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ItemPurchaseSchema extends Schema {
  up () {
    this.create('item_purchase', (table) => {
      table.increments()
      //table.timestamps()
      table.integer('item_id').unsigned()
      table.integer('purchase_id').unsigned()
      table.integer('quantity')
    })
  }

  down () {
    this.drop('item_purchase')
  }
}

module.exports = ItemPurchaseSchema
