const root = document.querySelector(".root");
const menu = document.querySelector(".menu");
let basketRoot = document.querySelector(".basket-root")
let basket;

function render(data) {
  let template = data.map((item) => {
    const { id, title, price, description, category, image, rating } = item;
    return `
    <div class="card">
    <img src="${image}">
    <h1 onclick="showItem(\`${id}\`)" class="card-title"> ${title}</h1>
    <div class="card-info">
    <h2 class="card-price">PRICE: ${price}</h2>
    <div><span class="cat-title">CATEGORY : </span><button>${category}</button></div>
    </div>
    </div>    
    `;
  });
  root.innerHTML = template.join("");
}

function renderCategory() {

  let tempCat = CATEGORIES.map((item) => {
    return `
             <p class="menu-category" onclick="selectedCategory(\`${item}\`)">${item}</p>       
           `
  })
  menu.innerHTML = tempCat.join("");
  menu.classList.toggle("show-menu");
}

function renderProduct(item) {

  let temProduct = `
   <div class="selected-item">
   <div class="selected-cart-left">
   <img class="selected-item-image" src="${item.image}">
   <p class="selected-item-price">PRICE: ${item.price}</p>
   </div>
   <div class="selected-cart-right">
   <h1 class="selected-item-title"> ${item.title}</h1>
   <p class="selected-item-desc">${item.description}</p>
   <div class="selected-item-button">
   <div class="selected-item-rate">
   <p>${item.rating.rate} From 5 </p>    
   <p>Comments: ${item.rating.count}</p>
  <button onclick = "selectedCategory(\`${item.category}\`)">${item.category}</button>
  </div>
  <button class="selected-item-button-basket">ADD TO BASKET</button>
  </div>
  </div>    
  </div>
  `;
  root.innerHTML = ""
  root.innerHTML = temProduct;


  basket = document.querySelector("button.selected-item-button-basket");
  basket.addEventListener("click", addToBasket);
}

function renderBasketBtn(items) {
  basketRoot.innerHTML = items.join("");
}



function addToBasket() {
  alert("HIIIIIII")
}