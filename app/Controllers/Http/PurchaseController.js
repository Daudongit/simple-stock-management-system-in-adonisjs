'use strict'
const Purchase = use('App/Models/Purchase')
const { validateAll } = use('Validator')

class PurchaseController {
    
    async index ({ view,request }) {
        const purchases = await Purchase.query()
            .with('user').with('items').paginate(
                request.input('page',1),5
            )
       const items = await use('App/Models/Item').all()
        return view.render('purchases.index',{
            purchases:purchases.toJSON(),
            items:items.toJSON()
        })
    }

    async store ({ auth, session, request, response }) {
        
        const data = request.only(['title','seller'])

        data['user_id'] = auth.user.id

        const purchase = await Purchase.create(data)

        const itemPurchase = request.collect(
            ['item_id', 'quantity']
        ).map((itemQuantity)=>{
            itemQuantity['purchase_id'] = purchase.id
            return itemQuantity
        })
        await use('Database').insert(itemPurchase).into('item_purchase')
        
        session.flash(
            { success: 'Purchase successfully created' }
        )

        return response.route('purchases.index')
    }

    async destroy ({ purchase, session, response }) {

        await purchase.items().detach()

        await purchase.delete()

        session.flash(
            { success: 'Purchase successfully deleted' }
        )

        return response.route('purchases.index')
    }
}

module.exports = PurchaseController
