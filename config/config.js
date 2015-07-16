var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'aftgame'
    },
    port: 3000,
    db: 'mongodb://localhost/aftgame-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'aftgame'
    },
    port: 3000,
    db: 'mongodb://localhost/aftgame-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'aftgame'
    },
    port: 3000,
    db: 'mongodb://localhost/aftgame-production'
  }
};

module.exports = config[env];
