let user = {
  password: "123",
};
user.email = "usman.akram@gmail.com";
console.log(user);

let products = [
  { name: "Pen", price: 60 },
  { name: "Pencil", price: 30 },
  { name: "Book", price: 56 },
  { name: "Board", price: 45 },
  { name: "Box", price: 33 },
];
// let filteredProducts = products.filter(filterCriteria);
// let filteredProducts = products.filter(function (p) {
//   return p.price <= 45;
// });
// const cheapProducts = (p) => {
//   return p.price <= 45;
// };
const cheapProducts = (p) => p.price <= 45;

// let filteredProducts = products.filter(cheapProducts);
let filteredProducts = products.filter((p) => p.price <= 45);
console.log(products);
console.log(filteredProducts);

function filterCriteria(p) {
  //   if (p.price <= 45) return true;
  //   else return false;
  return p.price <= 45;
}
