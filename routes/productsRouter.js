const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (request, response) => {
  const { designer, gender, limit } = request.query;
  let queryFilters = '';
  if (designer) {
    queryFilters += 'Designer: ' + designer + '. ';
  };
  if (gender) {
    queryFilters += 'Gender: ' + gender + '. ';
  };
  const products = [];
  for (let i = 0 ; i < (limit || 50) ; i ++) {
    products.push({
      designerName: faker.company.companyName(),
      productName: faker.commerce.productName(),
      productPrice: Number(faker.commerce.price()),
      productImage: faker.image.imageUrl()
    });
  };
  response.json({
    filtro: queryFilters || 'Sin filtro',
    limit: limit || 'No limit defined',
    data: products
  });
});

router.get('/:productId', (request, response) => {
  const { productId } = request.params;
  response.json({
    productID: productId,
    productName: 'My product ' + productId
  });
});

module.exports = router;
