export async function getProducts () {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    const products = data;
    return products;
  } catch (err) {
    console.log('Error: ', err);
  }
}
