function cat(array) {
    myArr = array.slice();
    class Cat {
        constructor(name, age) {
            this.name = name;``
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    
    let catsArray = [];
    while(myArr.length > 0){
    let stringArr = myArr.shift().split(' ');
    catsArray.push(new Cat(stringArr[0], stringArr[1]));
    }

    for(let i = 0; i < catsArray.length; i++){
        catsArray[i].meow();
    }
}
cat(['Mellow 2', 'Tom 5']);