let user = {
  password: "123",
};
user.email = "usman.akram@gmail.com";
console.log(user);

var products = [
  { name: "Pen", price: 60 },
  { name: "Pencil", price: 30 },
  { name: "Book", price: 56 },
  { name: "Board", price: 45 },
  { name: "Box", price: 33 },
];

let filteredProducts = products.filter((p) => p.price <= 45);
console.log(products);
console.log(filteredProducts);

const test = (a, b) => a < b;

console.log(test(7, 6));
console.log(window);
