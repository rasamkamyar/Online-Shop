let PRODUCTS = [];
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => (PRODUCTS = data))
  .then(() => render());


  

  // fetch('https://fakestoreapi.com/products/categories')
  // .then(res=>res.json())
  // .then(json=>console.log(json))
  
  


  

  