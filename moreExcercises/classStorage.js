class Storage{
    constructor(capacity){
        this.capacity = capacity,
        this.products = [],
        this.totalCost = 0;
    }
    addProduct(product){
        this.products.push(product);
        this.capacity -= product.quantity;
        this.totalCost += (product.quantity * product.price);
    }
    getProducts(){
        for (const element of this.products) {
            console.log(JSON.stringify(element));
        }
    }
}
let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
storage.getProducts();
console.log(storage.capacity);
console.log(storage.totalCost);
