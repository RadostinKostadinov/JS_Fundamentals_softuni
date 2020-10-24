let counter = 0;
myArr = ['2', '5', '5', '4', '2'];
for(let i = 0; i < myArr.length - 1; i++){
    if(myArr[i] == myArr[i+1]){
        console.log(myArr[i], myArr[i+1]);
        counter++;
    }
}
console.log(counter);
