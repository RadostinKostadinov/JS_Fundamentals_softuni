function loadingBar(loadedPercents){
    let loaded = Number(loadedPercents);
    loaded /= 10;
    let remaining = 10 - loaded;
    let arrPrint = [];
    arrPrint.push('[');
    for(let i = 0; i < loaded; i++){
        arrPrint.push('%');
    }
    for(let i = 0; i < remaining; i++){
        arrPrint.push('.');
    }
    arrPrint.push(']');
    if(loaded == 10){
        console.log(`100% Complete!`);
        console.log(arrPrint.join(''));
    } else {
        console.log(`${loadedPercents}% ${arrPrint.join('')}`)
        console.log(`Still loading...`);
    }
}

loadingBar(50);