'use strict'

class JournalController {
    async index ({ view }) {
        
        return view.render('journals.index')
    }
}

module.exports = JournalController
