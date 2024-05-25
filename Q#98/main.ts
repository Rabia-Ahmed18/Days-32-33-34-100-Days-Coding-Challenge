//creating a function that tells about the days left until new Year.

function daysLeftNewYear(){

    let today= new Date();

    let newYear = new Date(today.getFullYear() +1 , 0 , 1);

    let difference = newYear.getTime() - today.getTime();

    let daysLeft = Math.ceil(difference /(1000 * 60 * 60 *24));

    return daysLeft;
}

let daysLeft = daysLeftNewYear();
console.log(`There are ${daysLeft} days left until new year`);


















