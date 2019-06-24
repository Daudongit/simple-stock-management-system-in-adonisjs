'use strict'

class ItemController {
    async index ({ view }) {
        
        return view.render('items.index')
    }
}

module.exports = ItemController
