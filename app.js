var app = angular.module("gemStore", []);

var gems = [
  {
    name: "Dodecahedron",
    price: 2.95,
    description: ". . .",
    canPurchase: true
  },
  {
    name: "Azurite",
    price: 110.50,
    description: ". . .",
    canPurchase: true,
    soldOut: false
  }
];

app.controller("StoreController", function() {
  var vm = this;
  vm.products = gems;
});
