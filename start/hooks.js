const { hooks } = require('@adonisjs/ignitor')


hooks.after.providersBooted(() => {
  const View = use('View')

  View.global('year', () => new Date().getFullYear())

  View.global('currency', () => use('Config').get('app.currency'))

  View.global('stringify', (item) => JSON.stringify(item))

  View.global('hasFlash', function(item){
      return this.resolve('old')(item,null)?true:false
    }
  )

  View.global('simplePagination', function (page,lastPage) {
    const url = this.resolve('url')
    const prevPage = ()=>{
      if(page == 1){
        return `<li class="page-item disabled"><span class="page-link">«</span></li>`
      }
      else{
        return `<li><a href="${url}?page=${parseInt(page) - 1}">«</a></li>`
      }
    }
    const nextPage = ()=>{
      if(parseInt(lastPage) > parseInt(page)){
        return `<li><a href="${url}?page=${parseInt(page) + 1}">»</a></li>`
      }else{
        return `<li class="page-item disabled"><span class="page-link">»</span></li>`
      }
    }
    return this.safe(`
      <ul class="pagination pagination-md">
          ${prevPage()}
          <li><a href="#">page ${page} of ${lastPage}</a></li>
          ${nextPage()}
      </ul>
    `)
  })

  use('Server').registerNamed({

      bind: async (request, next, [model]) => {

          const value = request.params[model.toLowerCase()]

          const key = (use('Env').get('DB_CONNECTION') === 'mongodb') ? '_id' : 'id'

          if (value) request[model.toLowerCase()] = await use(`App/Models/${model}`).findBy(key, value)

          await next()
      }

  });

  use('Route').Route.macro('bind', function (model) {

      this.middleware(`bind:${model}`)
      return this

  })
  
})
