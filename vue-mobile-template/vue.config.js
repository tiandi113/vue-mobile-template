'use strict'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

// const port = 8082

module.exports = {
  // devServer: {
  //   port: port,
  //   open: true,
  //   overlay: {
  //     warnings: false,
  //     errors: true
  //   },
  //   proxy: 'http://localhost:'
  // },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
