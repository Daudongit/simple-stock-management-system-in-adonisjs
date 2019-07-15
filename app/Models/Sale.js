'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sale extends Model {
    user () {
        return this.hasOne('App/Models/User','user_id','id')
    }

    items () {
        return this.belongsToMany('App/Models/Item')
        .withPivot(['quantity'])
    }
}

module.exports = Sale
