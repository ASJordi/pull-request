import { getProducts } from './getProducts.js';

async function main () {
  const products = await getProducts();
  console.log(products);
}

main();
