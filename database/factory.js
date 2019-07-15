'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/User', (faker, index, data) => {
  const defaultValue = {
    first_name: faker.first(),
    last_name: faker.last(),
    email: faker.email(),
    phone: faker.phone(),
    address: faker.address(),
    password: 'secret',
  }

  return Object.assign(defaultValue, data)
})

Factory.blueprint('App/Models/Item', (faker, index, data) => {
  const defaultValue = {
    name:faker.unique(faker.word,50)[0],
    price: faker.integer({ min: 500, max: 3000 })
  }

  return Object.assign(defaultValue, data)
})

Factory.blueprint('App/Models/Sale', (faker, index, data) => {
  const defaultValue = {
    title:faker.unique(faker.word,50)[0],
    buyer: faker.name(),
    user_id: async () => {
      return (await Factory.model('App/Models/User').create()).id
    }
  }

  return Object.assign(defaultValue, data)
})

Factory.blueprint('App/Models/Purchase', (faker, index, data) => {
  const defaultValue = {
    title:faker.unique(faker.word,20)[0],
    seller: faker.name(),
    user_id: async () => {
      return (await Factory.model('App/Models/User').create()).id
    }
  }

  return Object.assign(defaultValue, data)
})

Factory.blueprint('App/Models/Journal', (faker, index, data) => {
  const defaultValue = {
    type: faker.pickone(['credit','debit']),
    user_id: async () => {
      return (await Factory.model('App/Models/User').create()).id
    }
  }

  return Object.assign(defaultValue, data)
})

Factory.blueprint('item_sale', (faker, index, data) => {
  const defaultValue = {
    quantity: faker.integer({min:3,max:8}),
    item_id: async () => {
      return (await Factory.model('App/Models/Item').create()).id
    },
    sale_id: async () => {
      return (await Factory.model('App/Models/Sale').create()).id
    }
  }

  return Object.assign(defaultValue, data)
})

Factory.blueprint('item_purchase', (faker, index, data) => {
  const defaultValue = {
    quantity: faker.integer({min:3,max:8}),
    item_id: async () => {
      return (await Factory.model('App/Models/Item').create()).id
    },
    purchase_id: async () => {
      return (await Factory.model('App/Models/Purchase').create()).id
    }
  }

  return Object.assign(defaultValue, data)
})

