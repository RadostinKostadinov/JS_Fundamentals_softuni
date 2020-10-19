function distinctArr(array){
    let myArr = array.slice();
    myArr = myArr.filter((val, index, arr) => {
        let flag = true;
        for(let i = index-1; i >= 0; i--){
            if(val == arr[i]){
                flag = false;
            }
        
        }
        return flag;
    })
    console.log(myArr.join(' '));

}
distinctArr([20, 8, 12, 13, 4, 4, 8, 5]);