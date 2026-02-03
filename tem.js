const poem = `Roses are red,
Violets are blue,
Sugar is sweet,
And so are you.`;
console.log(poem);

constgetTax = (amount, taxRate = 0.05) => {
  return amount + (amount * taxRate);
}

const product = { name: "Laptop", price: 1000 };
console.log(getTax(product.price));
