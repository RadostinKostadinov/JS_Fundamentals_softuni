function vacation(groupOfPeople, typeOfTheGroup, DayOfTheWeek) {
    groupOfPeople = +groupOfPeople;
    let pricePerPerson = 0;

    switch (typeOfTheGroup) {
        case 'Students':
            //price per Student
            switch (DayOfTheWeek) {
                case 'Friday':
                    pricePerPerson = 8.45;
                    break;
                case 'Saturday':
                    pricePerPerson = 9.80;
                    break;
                case 'Sunday':
                    pricePerPerson = 10.46;
                    break;
            }
            //discount for Students
            if(groupOfPeople >= 30){
                pricePerPerson *= 0.85;
            }

            break;
        case 'Business':
            //price per person from Business packet
            switch (DayOfTheWeek) {
                case 'Friday':
                    pricePerPerson = 10.90;
                    break;
                case 'Saturday':
                    pricePerPerson = 15.60;
                    break;
                case 'Sunday':
                    pricePerPerson = 16;
                    break;
            }
            //discount for Business packet
            if(groupOfPeople >=10){
                groupOfPeople -= 10;
            }
            break;
        case 'Regular':
            //price for regular person
            switch (DayOfTheWeek) {
                case 'Friday':
                    pricePerPerson = 15;
                    break;
                case 'Saturday':
                    pricePerPerson = 20;
                    break;
                case 'Sunday':
                    pricePerPerson = 22.50;
                    break;
            }
            //discount for regular packet
            if(groupOfPeople >= 10 && groupOfPeople <= 20){
                pricePerPerson *= 0.95;
            }
            break;
    }

    let totalPriceForGroup = groupOfPeople * pricePerPerson;
    console.log(`Total price: ${totalPriceForGroup.toFixed(2)}`);

}
vacation(12,
    "Regular",
    "Saturday"    
    )