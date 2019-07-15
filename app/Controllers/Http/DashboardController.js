'use strict'

class DashboardController {
    async index ({ view }) {
        const Item = use('App/Models/Item')
        const Journal = use('App/Models/Journal')
        const Sale = use('App/Models/Sale')

        return view.render('dashboard',{
            itemCount:await Item.getCount(),
            journalCount:await Journal.getCount(),
            saleCount:await Sale.getCount()
        })
    }
}

module.exports = DashboardController
