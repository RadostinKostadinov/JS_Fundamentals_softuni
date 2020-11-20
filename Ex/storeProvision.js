function storeProvision(arrayOne, arrayTwo){
    let currentStock = arrayOne.slice();
    let orderedProducts = arrayTwo.slice();

    let assocArrayOfStock = {};

    for(let i = 0; i < currentStock.length; i+=2){
        assocArrayOfStock[currentStock[i]] = Number(currentStock[i+1]);
    }

    for(let i = 0; i < orderedProducts.length; i+=2){
        if(!assocArrayOfStock.hasOwnProperty(orderedProducts[i])) {
            assocArrayOfStock[orderedProducts[i]] = 0;
        }
        assocArrayOfStock[orderedProducts[i]] += Number(orderedProducts[i+1]);
    }


    for (const product in assocArrayOfStock) {
        if (assocArrayOfStock.hasOwnProperty(product)) {
            const quantity = assocArrayOfStock[product];
            console.log(`${product} -> ${quantity}`);
        }
    }

}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );