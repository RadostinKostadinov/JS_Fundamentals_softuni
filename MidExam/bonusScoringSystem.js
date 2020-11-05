function solve(array){
    let myArr = array.slice();
    let countOfStudents = Number(myArr.shift()); 
    let countOfLectures = Number(myArr.shift());
    let additionalBonus = Number(myArr.shift());

    let totalBonus = 0;
    let lastBiggestBonus = 0;
    let lastBiggestBonusAttendances = 0;
    for (const attendances of myArr) {
        totalBonus = Number(attendances) / countOfLectures * (5 + additionalBonus);
        if(totalBonus > lastBiggestBonus) {
            lastBiggestBonus = totalBonus;
            lastBiggestBonusAttendances = Number(attendances);
        }
    }
    
    console.log(`Max Bonus: ${Math.ceil(lastBiggestBonus)}.`);
    console.log(`The student has attended ${lastBiggestBonusAttendances} lectures.`)
}

solve([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]);
  