const productsRouter = require('./productsRouter');

function routerAPI (app) {
  app.use('/products', productsRouter);
}

module.exports = routerAPI;
