// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'evote',
      user: 'root',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'evote',
      user: 'root',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'evote',
      user: 'root',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
  }

};
