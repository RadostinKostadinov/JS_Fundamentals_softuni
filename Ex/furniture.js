function furniture(array) {
    let myArr = array.slice();
    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+(\.[\d]+)?)!(?<qty>[\d]+)/;
    let furnitureArr = [];
    let totalPrice = 0;
    for (const line of myArr) {
        let match = pattern.exec(line);
        if (match != null) {
            furnitureArr.push(match.groups.name);
            totalPrice += Number(match.groups.price) * Number(match.groups.qty);
        }
    }
    console.log(`Bought furniture: \n${furnitureArr.join('\n')}\nTotal money spend: ${totalPrice.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);