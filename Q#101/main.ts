//======================== Q # 101 =====================
// Question 101: Generate a random integer between 1 and 10.

import { get } from "http";

function getRandomNum():number{
    let num= Math.floor(Math.random()*10 +1);
return num 
}
console.log(getRandomNum());
