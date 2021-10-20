const express = require('express');
const ProductsService = require('../services/ProductsService');

const router = express.Router();
const productsService = new ProductsService();

router.get('/', (request, response) => {
  const productsResponse = productsService.getAll(request.query);

  response.json(productsResponse);
});

router.get('/:productId', (request, response) => {
  const { productId } = request.params;
  const productsResponse = productsService.get(productId);

  response.json(productsResponse);
});

router.post('/', (request, response) => {
  const body = request.body;
  const newProduct = productsService.create(body);
  response.status(201).json({
    message: 'Product created',
    data: newProduct
  });
});

router.patch('/:productId', (request, response) => {
  const { productId } = request.params;
  const body = request.body;
  const updatedProduct = productsService.update(productId, body);
  response.status(201).json({
    message: 'Product updated',
    data: updatedProduct
  });
});

router.put('/:productId', (request, response) => {
  const { productId } = request.params;
  const body = request.body;
  response.json({
    message: 'Product completely updated',
    productId: productId,
    data: body
  });
});

router.delete('/:productId', (request, response) => {
  const { productId } = request.params;
  response.json({
    message: 'Product deleted',
    productId: productId
  });
});

module.exports = router;
