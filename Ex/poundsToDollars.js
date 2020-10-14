function poundsToDollars(pounds){
    pounds = +pounds;
    const course = 1.31;
    let dollars = pounds * course;
    console.log(dollars.toFixed(3));
}