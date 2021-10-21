const express = require('express');
const ProductsService = require('../services/ProductsService');

const router = express.Router();
const productsService = new ProductsService();

router.get('/', async (request, response) => {
  const productsResponse = await productsService.getAll(request.query);

  response.json(productsResponse);
});

router.get('/:productId', async (request, response) => {
  const { productId } = request.params;
  const productsResponse = await productsService.get(productId);

  response.json(productsResponse);
});

router.post('/', async (request, response) => {
  const body = request.body;
  const newProduct = await productsService.create(body);
  response.status(201).json({
    message: 'Product created',
    data: newProduct
  });
});

router.patch('/:productId', async (request, response) => {
  const { productId } = request.params;
  const body = request.body;
  const updatedProduct = await productsService.update(productId, body);
  response.status(200).json({
    message: 'Product updated',
    data: updatedProduct
  });
});

router.put('/:productId', async (request, response) => {
  const { productId } = request.params;
  const body = request.body;
  const replacedProduct = await productsService.replace(productId, body);
  response.status(200).json({
    message: 'Product replaced',
    data: replacedProduct
  });
});

router.delete('/:productId', async (request, response) => {
  const { productId } = request.params;
  const deletedProduct = await productsService.delete(productId);
  response.status(200).json({
    message: 'Product deleted',
    data: deletedProduct
  });
});

module.exports = router;
