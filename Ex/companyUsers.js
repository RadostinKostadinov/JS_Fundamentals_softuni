function companyUsers(array){
    let myArr = array.slice().sort((a,b) => b.localeCompare(a));
    let Companies = {};

    while(myArr.length > 0){
        let [company, employee] = myArr.shift().split(' -> ');
        if(!Companies.hasOwnProperty(company)) Companies[company] = [];
        if(!Companies[company].includes(employee)) Companies[company].push(employee);
    }

    sortCompanies(Companies);

    for (const company in Companies) {
        if (Companies.hasOwnProperty(company)) {
            const arrayOfEmployees = Companies[company];
            console.log(company)
            for (const employee of arrayOfEmployees) {
                console.log(`-- ${employee}`);
            }
        }
    }



    function sortCompanies(assocArrOfCompanies){
        for (const company in assocArrOfCompanies) {
            if (assocArrOfCompanies.hasOwnProperty(company)) {
                const arrOfEmployees = assocArrOfCompanies[company].sort((a, b) => a.localeCompare(b));
                assocArrOfCompanies[company] = [];
                for (const employee of arrOfEmployees) {
                    assocArrOfCompanies[company].push(employee);
                }
            }
        }
    }

    
    
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )