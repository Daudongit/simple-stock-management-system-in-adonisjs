'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ItemSaleSchema extends Schema {
  up () {
    this.create('item_sale', (table) => {
      table.increments()
      //table.timestamps()
      table.integer('item_id').unsigned()
      table.integer('sale_id').unsigned()
      table.integer('quantity')
    })
  }

  down () {
    this.drop('item_sale')
  }
}

module.exports = ItemSaleSchema
