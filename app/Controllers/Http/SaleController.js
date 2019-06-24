'use strict'

class SaleController {
    async index ({ view }) {
        
        return view.render('sales.index')
    }
}

module.exports = SaleController
