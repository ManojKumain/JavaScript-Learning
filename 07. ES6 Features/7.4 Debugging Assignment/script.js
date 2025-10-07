const products = [
  { name: "Laptop", price: 60000 },
  { name: "Phone", price: 30000 },
  { name: "Tablet", price: 25000 }
];

// 1️⃣ Apply 10% discount using map()
const discounted = products.map(product => {
  price = product.price * 0.9
  return { name: product.name, price };
});

// 2️⃣ Filter products with price < 30000
const affordable = discounted.filter(product => product.price < 30000);
console.log(affordable)

// 3️⃣ Print results using template literals
affordable.forEach(product => {
  console.log(`💰 ${product.name} now costs ${product.price}`);
});

// 4️⃣ Add a new product using spread operator
const newProduct = { name: "Smartwatch", price: 15000 };
const updatedProducts = [...products, newProduct];
console.log(updatedProducts);

// 5️⃣ Create a function to sum all prices using rest operator
function totalPrice(...prices) {
  return prices.reduce((sum, p) => sum + p, 0);
}
console.log(totalPrice(1000, 2000, 3000)); // Expected output: 6000
