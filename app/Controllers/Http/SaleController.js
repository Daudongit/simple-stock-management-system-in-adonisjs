'use strict'

const Sale = use('App/Models/Sale')
const { validateAll } = use('Validator')

class SaleController {
    async index ({ view, request }) {
        
        const sales = await Sale.query()
            .with('user').with('items').paginate(
                request.input('page',1),5
            )
        const items = await use('App/Models/Item').all()

        return view.render('sales.index',{
            sales:sales.toJSON(),
            items:items.toJSON()
        })
    }

    async store ({ auth, session, request, response }) {
        
        const data = request.only(['title','buyer'])

        data['user_id'] = auth.user.id

        const sale = await Sale.create(data)
        
        const itemSale = request.collect(
            ['item_id', 'quantity']
        ).map((itemQuantity)=>{
            itemQuantity['sale_id'] = sale.id
            return itemQuantity
        })
        await use('Database').insert(itemSale).into('item_sale')
        
        session.flash(
            { success: 'Sale successfully created' }
        )

        return response.route('sales.index')
    }

    async destroy ({ sale, session, response }) {

        await sale.items().detach()

        await sale.delete()

        session.flash(
            { success: 'Sale successfully deleted' }
        )

        return response.route('sales.index')
    }
}

module.exports = SaleController
