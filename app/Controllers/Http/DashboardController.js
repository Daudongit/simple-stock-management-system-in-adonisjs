'use strict'

class DashboardController {
    async index ({ view }) {
        
        return view.render('dashboard')
    }
}

module.exports = DashboardController
