// ====================== Q # 99 ==============================================

// : Generate a date object representing your next birthday and log it to the console.
function myBirthdayDate (day: number ,month :number){
    let currentDate = new Date()
    let birthday = new Date(currentDate.getFullYear() , month -1 , day)
    if (birthday>currentDate){
        birthday.setFullYear(currentDate.getFullYear() +1)
    }
    return birthday
}

console.log(`Your next birthday will be on ${myBirthdayDate(19,2).toDateString()}`);