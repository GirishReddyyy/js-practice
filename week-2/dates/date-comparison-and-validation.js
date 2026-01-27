// Given:
let enrollmentDeadline = new Date("2026-01-20");

// Tasks:
// 1.Check if:
//       * Today is before deadline → "Enrollment Open"
let date=new Date()
if(date<enrollmentDeadline){
    console.log("enrollment open")
}
//     * Today is after deadline → "Enrollment Closed"
else{
    console.log("enrollment closed")
}
// 2. Validate user input date:
//       * Input: "2026-02-30"
//     * Detect whether the date is valid or invalid
let date2=new Date(2026-2-30)
let year=date2.getFullYear()
let month=date2.getMonth()

if(month>11){
    console.log("invalid month")
}else{
    month+=2
    let lastDate=new Date(year,month-1).getDate()
    console.log("last date is",lastDate)
    if(date2.getDate()<=lastDate){
        console.log("invalid date")
    }else{
        console.log("valid date")
    }
}
