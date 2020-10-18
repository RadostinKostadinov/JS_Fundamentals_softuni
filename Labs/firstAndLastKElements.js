function firstLastKEl(array){
    let myArr = array;
    let numOfElementsToPrint = myArr.shift();
    let secondArrStart = (myArr.length - 1) - numOfElementsToPrint;
    
    let arrOfFirstKElements = myArr.filter((val, index) => index >= 0 && index <= numOfElementsToPrint).slice(0, numOfElementsToPrint);
    let arrOfLastKElements = myArr.filter((val, index) => index > secondArrStart && index < myArr.length);

    console.log(arrOfFirstKElements.join(' '));
    console.log(arrOfLastKElements.join(' '));
}
firstLastKEl([3,
    6, 7, 8, 9]
   
    );