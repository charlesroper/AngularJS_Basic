var app = angular.module("gemStore", ['ui.bootstrap']);

var gems = [
  {
    name: "Dodecahedron",
    price: 2,
    description: ". . .",
    images: [
      {
        full: "dodecahedron-01-full.png",
        thumb: "dodecahedron-01-thumb.png",
        title: "Mmm, pixelicious!",
        alt: "A pixellated dodecahedron gem in sparkling orange and purple hues."
      }
    ],
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
