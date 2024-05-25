"use strict";
// ====================== Q # 95 =======================
// find the value greater then 10 in an array
function numberGreaterThan10(array) {
    return array.filter(num => num > 10);
}
let num = [12, 34, 1, 2, 66, 78];
console.log(numberGreaterThan10(num));
