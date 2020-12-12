function softuniBarIncome(array){
    let pattern = /%(?<name>[A-Z][a-z]+)%([^\|\$\%\.]+)?<(?<product>[A-Z][a-z]+)>([^\|\$\%\.]+)?\|(?<qty>[\d]+)\|([^\|\$\%\.\d]+)?(?<price>[0-9]+(\.[0-9]+)?)\$/;
    let income = 0;
    for (const line of array) {
        if(pattern.test(line)){
            let customer = line.match(pattern);
            income += Number(customer.groups.qty) * Number(customer.groups.price);
            console.log(`${customer.groups.name}: ${customer.groups.product} - ${(Number(customer.groups.qty) * Number(customer.groups.price)).toFixed(2)}`)
        }
    }
    console.log(`Total income: ${income.toFixed(2)}`);
}
softuniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
  ]);
