function oddAndEvenSum(number) {
    num = Number(number);

    let oddSum = 0;
    let evenSum = 0;
    while(num != 0){
        let sum = num % 10;
        if(sum % 2 == 0){
            evenSum += sum;
        } else {
            oddSum += sum;
        }
        num = parseInt(num / 10);
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);


}
oddAndEvenSum(1000435);