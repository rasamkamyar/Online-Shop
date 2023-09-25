const root = document.querySelector(".root");
function render() {
  console.log(PRODUCTS);
  let template = PRODUCTS.map((item) => {
    const { id, title, price, description, category, image, rating } = item;
    return `
    <div class="card">
    <img src="${image}">
    <h1 class="card-title"> ${title}</h1>
    <div class="card-info">
    <h2 class="card-price">PRICE: ${price}</h2>
    <button><span class="cat-title">CATEGORY:</span> ${category}</button>
    </div>
    </div>    
    `;
  });
  console.log(template);
  root.innerHTML = template.join("");
  console.log(root.innerHTML);
}

// {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//         "rate": 3.9,
//         "count": 120
//     }
// }
