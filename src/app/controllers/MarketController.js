const mock = require('../../../mock.json');

class MarketController {
  get(req, res) {
    return res.json(mock.markets);
  }
}

export default new MarketController();
