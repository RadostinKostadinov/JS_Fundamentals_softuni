function nationalCourt(array){
    let pplPerHour = Number(array[0]) + Number(array[1]) + Number(array[2]);
    let people = Number(array[3]);
    let totalHours = 1;

    while(people > 0){
        if(totalHours % 4 != 0){
            people -= pplPerHour;
            totalHours += 1;
        } else {
            totalHours += 1;
        }
    }
    console.log(`Time needed: ${totalHours-1}h.`)

}
nationalCourt([5,
    6,
    4,
    20
    ])