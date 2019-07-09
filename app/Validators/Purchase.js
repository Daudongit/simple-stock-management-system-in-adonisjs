'use strict'

class Purchase {

  get rules () {
    return {
      title: 'required|string',
      seller: 'required|string'
    }
  }

  get messages () {
    return {
      'title.required': 'purchase title is required.',
      'title.string': 'You must provide a valid title.',
      'seller.required': 'Seller is required.',
      'seller.string': 'You must provide a valid seller.'
    }
  }

  get validateAll () {
    return true
  }
}

module.exports = Purchase
