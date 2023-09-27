const root = document.querySelector(".root");
const menu = document.querySelector(".menu")
// const cats = document.querySelector(".menu-category")
// const root2 = document.querySelector(".root2")


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
   <div class="selected">
  <img src="${item.image}">
  <h1 onclick="showItem(\`${item.title}\`)" class="card-title"> ${item.title}</h1>
  <div class="card-info">
  <h2 class="card-price">PRICE: ${item.price}</h2>
  <div><span class="cat-title">CATEGORY : </span><button>${item.category}</button></div>
  </div>
  </div>    
  `;
  root.innerHTML = ""
  root.innerHTML = temProduct


}