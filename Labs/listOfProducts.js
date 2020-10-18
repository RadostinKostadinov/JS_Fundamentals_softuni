function listOfProducts(array){
    let myArr = array;
    myArr.sort();
    for (let i = 0; i < myArr.length; i++) {
        const element = myArr[i];
        console.log(`${i+1}.${element}`);
    }

}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);