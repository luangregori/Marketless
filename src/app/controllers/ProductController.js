const mock = require('../../../mock.json');

class ProductController {
  get(req, res) {
    return res.json(mock.products);
  }
}

export default new ProductController();
