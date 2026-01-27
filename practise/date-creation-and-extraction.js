// Tasks:
// 1. Create a Date object for current date & time.
let date= new Date()

//        2. Extract and display:
//                     * Year
//     * Month(human readable)
//     * Date
//     * Day of week
//         * Hours, minutes, seconds

console.log("year", date.getFullYear())

const monthNames=['January','February','March','April','May','June','July','August','September','October','November','December']
console.log("month",monthNames[date.getMonth()+1])

console.log("date",date.getDate())
const weekdays=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

console.log("day of week ",weekdays[date.getDay()])

console.log("hours",date.getHours())
console.log("minutes",date.getMinutes())
console.log("seconds",date.getSeconds())

// 3. Display the date in this format:
// DD - MM - YYYY HH: mm: ss

console.log(''+date.getDate()+ ' - '+date.getMonth()+1+' - '+date.getFullYear()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds())

console.log(date.getMonth()+1)