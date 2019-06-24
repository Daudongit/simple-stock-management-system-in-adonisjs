'use strict'

class InvoiceController {
    async index ({ view }) {
        
        return view.render('invoices.index')
    }
}

module.exports = InvoiceController
