function schoolGrades(array) {
    let myArr = array.slice();
    let myAssocArr = {};

    while (myArr.length > 0) {
        let [name, ...gradesList] = myArr.shift().split(' ');
        if (!myAssocArr.hasOwnProperty(name)) myAssocArr[name] = [];
        for (const grade of gradesList) {
            myAssocArr[name].push(grade);
        }
    }

    let sorted = Object.entries(myAssocArr).sort((a, b) => {

        
        let avgA = 0;
        let avgB = 0;
        let gradesA = 0;
        let gradesB = 0;

        for (let i = 0; i < a[1].length; i++) {
            avgA += Number(a[1][i]);
            gradesA++;
        }
        for (let y = 0; y < b[1].length; y++) {
            avgB += Number(b[1][y]);
            gradesB++;
        }
        avgA /= gradesA;
        avgB /= gradesB;
        return avgA - avgB;
    }
    
    )
    for (const student of sorted) {
        console.log(`${student[0]}: ${student[1].join(', ')}`);
    };

}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);