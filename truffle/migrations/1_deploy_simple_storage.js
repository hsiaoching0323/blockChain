const SimpleStorage = artifacts.require("SimpleStorage");
const BookStore = artifacts.require("BookStore");
const StoreFront = artifacts.require("StoreFront");
const PurchaseToken = artifacts.require("PurchaseToken");
module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(BookStore);
  deployer.deploy(StoreFront);
  deployer.deploy(PurchaseToken, 20);
};


