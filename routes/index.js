// Default Router manager file

const { Router } = require('express');

const productsRouter = require('./productsRouter');

function routerAPI (app) {
  const defaultRouter = Router();
  app.use('/api/default', defaultRouter);
  defaultRouter.use('/products', productsRouter);
}

module.exports = routerAPI;
