//creating a function that returns current formatted date.

function getGormattedDate():string{
let date_ob = new Date();
// current date
// adjust 0 before single digit date
let date=("0" +date_ob.getDate()).slice(-2); 

// current month
let month = ("0" +(date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

return `${date}-${month}-${year}`;}

const formattedDate=getGormattedDate();

console.log(`Formatted Date: ${formattedDate}`);
