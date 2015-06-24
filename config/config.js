var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'gameaft'
    },
    port: 3000,
    db: 'mongodb://localhost/gameaft-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'gameaft'
    },
    port: 3000,
    db: 'mongodb://localhost/gameaft-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'gameaft'
    },
    port: 3000,
    db: 'mongodb://localhost/gameaft-production'
  }
};

module.exports = config[env];
