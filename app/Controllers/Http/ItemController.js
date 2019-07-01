'use strict'

const Item = use('App/Models/Item')

const { validateAll  } = use('Validator')

class ItemController {

    async index ({ view,request }) {

        const items = await Item.query().paginate(
            request.input('page',1),20
        )
        
        return view.render('items.index',{
            items:items.toJSON()
        })
    }

    async store ({ session, request, response }) {
        
        const data = request.only(['name','price'])
    
        const validation = await this.getValidator(data)
    
        if (validation.fails()) {
          session
            .withErrors(validation.messages())
            .flashAll()
          return response.redirect('back')
        }

        await Item.create(data)

        session.flash(
            { success: 'Item successfully created' }
        )
        return response.route('items.index')
    }

    async update ({ item, session, request, response }) {
       
        const data = request.only(['name', 'price'])
    
        const validation = await this.getValidator(data)
    
        if (validation.fails()) {
          session
            .withErrors(validation.messages())
            .flashAll()
    
          return response.redirect('back')
        }
    
        item.merge(data)
        await item.save()
        
        session.flash(
            { success: 'Item successfully updated' }
        )
        return response.route('items.index')
    }

    async destroy ({ item, session, response }) {
        
        await item.delete()

        session.flash(
            { success: 'Item successfully deleted' }
        )

        return response.route('items.index')
    }

    getValidator(data){
        return  validateAll(
            data,{name: 'required|string'},
            {
                'name.required':
                'You must provide a valid name.'
            }
        )
    }
}

module.exports = ItemController
