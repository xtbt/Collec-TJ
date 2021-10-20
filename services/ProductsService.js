const faker = require('faker');

class ProductsService {

  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    for (let i = 0 ; i < 1000 ; i ++) {
      this.products.push({
        productId: faker.datatype.number(9999),
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

  create(data) {
    const newProduct = {
      productId: 10000 + faker.datatype.number(9999), 
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  update(productId, changes) {
    const index = this.products.findIndex(item => item.productId == productId);
    if (index > 0) {
      this.products[index] = changes;
    } else {
      throw new Error('Product not found');
    };
    return this.products[index];
  }

  delete(productId) {
    const index = this.products.findIndex(item => item.productId == productId);
    const deletedItem = this.products[index];
    if (index > 0) {
      this.products.splice(index, 1);
    } else {
      throw new Error('Product not found');
    };
    return deletedItem;
  }
}

module.exports = ProductsService;
