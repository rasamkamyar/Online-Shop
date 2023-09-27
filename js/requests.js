let PRODUCTS = [];
fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => (PRODUCTS = data))
    .then(() => render());

let CATEGORIES = []

function getCategory() {
    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(json => CATEGORIES = json)
        .then(() => renderCat())
}

function selectedCategory(selectedOne) {
    fetch(`https://fakestoreapi.com/products/category/${selectedOne}`)
        .then(res => res.json())
        .then(json => console.log(json))
}