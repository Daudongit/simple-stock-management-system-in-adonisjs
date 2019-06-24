'use strict'

class PaymentController {
    async index ({ view }) {
        
        return view.render('payments.index')
    }
}

module.exports = PaymentController
