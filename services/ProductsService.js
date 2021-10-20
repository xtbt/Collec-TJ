const faker = require('faker');

class ProductsService {

  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    for (let i = 0 ; i < 999 ; i ++) {
      this.products.push({
        productId: faker.datatype.number(999),
        productName: faker.commerce.productName(),
        productPrice: Number(faker.commerce.price()),
        productImage: faker.image.imageUrl()
      });
    };
  }

  getAll(queryString) {
    const { productId, productName } = queryString;
    // Code to get request query data ...

    return {
      filter: productId + ', ' + productName,
      totalItems: this.products.length,
      data: this.products
    };
  }

  get(productId) {
    const product = this.products.find(item => item.productId == productId);
    return {
      totalItems: product ? 1 : 0,
      data: product
    };
  }

  create() {

  }

  update() {

  }

  delete() {

  }
}

module.exports = ProductsService;
