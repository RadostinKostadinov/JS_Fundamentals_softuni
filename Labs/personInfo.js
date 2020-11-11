function personInfo(firstName, lastName, age){
    age = Number(age);
    class person {
        constructor(fName, lName, age) {
            this.firstName = fName;
            this.lastName = lName;
            this.age = age;
          }
        
    };

    personOne = new person(firstName,lastName,age);
    console.log(`firstName: ${personOne.firstName}`);
    console.log(`lastName: ${personOne.lastName}`);
    console.log(`age: ${personOne.age}`);

}
personInfo("Peter", 
"Pan",
"20"
);