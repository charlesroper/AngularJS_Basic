var app = angular.module("gemStore", []);

var gem = {
  name: "Azurite",
  price: 110.50,
  canPurchase: false,
  soldOut: true
};

app.controller("StoreController", function() {
  var vm = this;
  vm.product = gem;
});
