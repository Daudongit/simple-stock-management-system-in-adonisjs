'use strict'

class PurchaseController {
    async index ({ view }) {
        
        return view.render('purchases.index')
    }
}

module.exports = PurchaseController
