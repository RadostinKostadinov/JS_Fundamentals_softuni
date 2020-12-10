function cutAndReverse(string){
    let myString = string;
    let firstHalf = myString.slice(0, myString.length/2);
    let secondHalf = myString.slice(myString.length/2);
    let helper = "";
    for(let i = secondHalf.length-1; i >= 0; i--){
        helper += secondHalf[i];
    }
    secondHalf = helper;
    helper = "";
    for(let i = firstHalf.length-1; i >= 0; i--){
        helper += firstHalf[i];
    }
    firstHalf = helper;
    console.log(firstHalf);
    console.log(secondHalf);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');