'use strict'

class ReceiptController {
    async index ({ view }) {
        
        return view.render('receipts.index')
    }
}

module.exports = ReceiptController
