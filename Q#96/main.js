"use strict";
// ================== Q # 96 =======================
//creating a function that calculates all the numbers in an array and give total number value
function totalValue(arr) {
    return arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}
let numbers = [12, 4, 33, 2, 4, 6];
console.log(totalValue(numbers));
