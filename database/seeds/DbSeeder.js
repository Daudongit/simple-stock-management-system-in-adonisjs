'use strict'

/*
|--------------------------------------------------------------------------
| DbSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class DbSeeder {
  async run () {
    this.setCount()
    const user = await Factory
      .model('App/Models/User')
      .create()
    await Factory
      .model('App/Models/Item')
      .createMany(this.item).then(()=>{
        console.log('Item successfully created')
      })
   
     const salesPromise = this.sales(user)
     const purchasePromise = this.purchases(user)
     this.journals(user).then(()=>{
      console.log('Journal successfully created')
    })
     this.itemSales(salesPromise).then(()=>{
      console.log('ItemSale successfully created')
    })
     this.itemPurchases(purchasePromise).then(()=>{
      console.log('ItemPurchase successfully created')
    })

  }

  setCount(){
    //this.user = 1
    this.item = 100
    this.sale = 40
    this.purchase = 20
    this.journal = 20
    this.itemSale = 5
    this.itemPurchase = 6
    this.maxQuantity = 8
  }

  async sales(user){
     return  await Factory
      .model('App/Models/Sale')
      .createMany(this.sale,{
        user_id:user.id
      })
  }

  async purchases(user){
      return await Factory
      .model('App/Models/Purchase')
      .createMany(this.purchase,{
        user_id:user.id
      })
  }

  async journals(user){
     return await Factory
      .model('App/Models/Journal')
      .createMany(this.journal,{
        user_id:user.id
      })
  }

  async itemSales(salesPromise){
    salesPromise.then((sales)=>{
      sales.forEach(async (sale)=>{
        return await Factory
        .get('item_sale')
        .createMany(this.itemSale,{
          quantity:()=>Math.floor(Math.random() * this.maxQuantity) + 1,
          item_id:()=>Math.floor(Math.random() * this.item) + 1,
          sale_id:sale.id
        })
      })
    })
  }

  async itemPurchases(purchasePromise){
    purchasePromise.then((purchases)=>{
      purchases.forEach(async (purchase)=>{
        return await Factory
        .get('item_purchase')
        .createMany(this.itemPurchase,{
          quantity:()=>Math.floor(Math.random() * this.maxQuantity) + 1,
          item_id:()=>Math.floor(Math.random() * this.item) + 1,
          purchase_id:purchase.id
        })
      })
    })
  }
}

module.exports = DbSeeder
