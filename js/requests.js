// fetch for getting main products 
let PRODUCTS = [];
fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => (PRODUCTS = data))
    .then(() => render(PRODUCTS));

let CATEGORIES = []



// fetch for getting category for hamburger menu
function getCategory() {
    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(json => CATEGORIES = json)
        .then(() => renderCategory())
}



// fetch for recognize which category choosen from hamburger menu
function selectedCategory(selectedOne) {
    fetch(`https://fakestoreapi.com/products/category/${selectedOne}`)
        .then(res => res.json())
        .then(json => render(json))
}


// fetch for selected products when onclick on specific item
function showItem(selected) {
    fetch(`https://fakestoreapi.com/products/${selected}`)
        .then(res => res.json())
        .then(json => renderProduct(json))
}

let CART = []
fetch('https://fakestoreapi.com/carts/1')
    .then(res => res.json())
    .then(json => json.products.map((current) => {
        fetch(`https://fakestoreapi.com/products/${current.productId}`)
            .then(res => res.json())
            .then((result) => {
                console.log(result)
                CART.push
                    (`
                    <h1>${result.title}</h1>
                    `)
            });
    }))
    .then(() => renderBasketBtn(CART))
