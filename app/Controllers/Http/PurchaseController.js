'use strict'
const Purchase = use('App/Models/Purchase')

class PurchaseController {
    async index ({ view,request }) {
        const purchases = await Purchase.query()
            .with('user').with('items').paginate(
                request.input('page',1),5
            )
        console.clear()
        console.log(purchases.toJSON().data[1].items)
        return view.render('purchases.index',{
            purchases:purchases.toJSON()
        })
    }
}

module.exports = PurchaseController
