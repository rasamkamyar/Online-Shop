let PRODUCTS = [];
fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => (PRODUCTS = data))
    .then(() => render(PRODUCTS));

let CATEGORIES = []

function getCategory() {
    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(json => CATEGORIES = json)
        .then(() => renderCategory())
}

function selectedCategory(selectedOne) {
    fetch(`https://fakestoreapi.com/products/category/${selectedOne}`)
        .then(res => res.json())
        .then(json => render(json))
}

function showItem(selected){
    fetch(`https://fakestoreapi.com/products/${selected}`)
            .then(res=>res.json())
            .then(json=>renderProduct(json))
}