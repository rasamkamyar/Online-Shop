let PRODUCTS = [];
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => (PRODUCTS = data))
  .then(() => render());
