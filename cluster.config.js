const numCPUs = require('os').cpus().length;

module.exports = {
  "apps": [
    {
      "name": "cleaner",
      "script": "./server/core/cleaner/index.js",
      // "watch": true
      // "env": {
      //   "NODE_ENV": "development"
      // },
      // "env_production": {
      //   "NODE_ENV": "production"
      // }
    },
    {
      "name": "app",
      "script": "./server/app.js",
      "instances": numCPUs,
      "exec_mode": "cluster",
      // "watch": true
    }
  ]
}
