'use strict'

class Sale {

  get rules () {
    return {
      title: 'required|string',
      buyer: 'required|string'
    }
  }

  get messages () {
    return {
      'title.required': 'sale title is required.',
      'title.string': 'You must provide a valid title.',
      'buyer.required': 'sale buyer is required.',
      'buyer.string': 'You must provide a valid buyer.'
    }
  }

  get validateAll () {
    return true
  }
}

module.exports = Sale
