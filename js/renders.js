const root = document.querySelector(".root");
const menu = document.querySelector(".menu")
const cats = document.querySelector(".category-menu")

function render() {
  let template = PRODUCTS.map((item) => {
    const { id, title, price, description, category, image, rating } = item;
    return `
    <div class="card">
    <img src="${image}">
    <h1 class="card-title"> ${title}</h1>
    <div class="card-info">
    <h2 class="card-price">PRICE: ${price}</h2>
    <div><span class="cat-title">CATEGORY : </span><button>${category}</button></div>
    </div>
    </div>    
    `;
  });
  root.innerHTML = template.join("");
}

function renderCat() {

  let tempCat = CATEGORIES.map((item) => {
    return `
    <p onclick="selectedOne(\`${item}\`)">${item}</p>       
             `
  })
  menu.innerHTML = tempCat.join("");
}

