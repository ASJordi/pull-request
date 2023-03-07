import { getProducts } from './obtenerProductos.js';

async function main () {
  const products = await getProducts();
  console.log(products);
}

main();
