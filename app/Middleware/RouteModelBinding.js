'use strict'

class RouteModelBinding{
    async handle (request, next, properties) {
        const value = request.params['id']
        const key = (use('Env').get('DB_CONNECTION') === 'mongodb') ? '_id' : 'id'

        if (value) request[properties[0].toLowerCase()] = await use(`App/Models/${properties[0]}`)
            .findBy(key, value)
        await next()
    }
}
module.exports = RouteModelBinding