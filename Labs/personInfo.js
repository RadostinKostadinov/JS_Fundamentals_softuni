function personInfo(firstName, lastName, age) {
    age = Number(age);
    let personOne = {
        firstName,
        lastName,
        age
    };
    return personOne;

}
personInfo("Peter",
    "Pan",
    "20"
);