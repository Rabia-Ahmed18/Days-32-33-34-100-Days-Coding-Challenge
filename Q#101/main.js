"use strict";
//======================== Q # 101 =====================
// Question 101: Generate a random integer between 1 and 10.
Object.defineProperty(exports, "__esModule", { value: true });
function getRandomNum() {
    var num = Math.floor(Math.random() * 10 + 1);
    return num;
}
console.log(getRandomNum());
