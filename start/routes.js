'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Route.on('/').render('welcome')
Route.get('/',({response})=>{
  response.send('hello world')
})
//Route.get('/','DashboardController.index')
// Route.get('dashboard','DashboardController.index')
// Route.resource('users','UserController')
//   .validator(new Map([ [['users.store','users.update'], ['User']] ]))
//   .middleware(['bind:User'])
// Route.resource('items','ItemController').middleware(['bind:Item'])
// Route.resource('sales','SaleController')
//   .validator(new Map([ [['sales.store'], ['Sale']] ]))
//   .middleware(['bind:Sale'])
// Route.resource('purchases','PurchaseController')
//   .validator(new Map([ [['purchases.store'], ['Purchase']] ]))
//   .middleware(['bind:Purchase'])
// Route.resource('journals','JournalController')
// Route.resource('invoices','InvoiceController')
// Route.resource('receipts','ReceiptController')
// Route.get('payment/:item','PaymentController.index').bind('Item')