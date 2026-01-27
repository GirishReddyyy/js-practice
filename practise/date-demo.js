let date1=new Date()
console.log("date is",date1)

let date2=new Date('2022-1-12')
console.log("date2 is",date2)

let date3=new Date(2022,0,12)
console.log("date3 is",date3)

console.log(date3.toString())

let date4=new Date(Date.now())
console.log("date4 is",date4.toISOString())
console.log(date4.toString())

let date5=new Date(2022,0,12,10,30,45)
console.log("date5 is",date5)

//ISO format date
// YYYY-MM-DD T HH:MM:SS .SSS Z(UTC time zone (zululu time))
//   date        time    milli  timezone


let date6=new Date(2022,0) //default day 1 of the month, time 00:00:00
console.log("date6 is",date6.toString())
let date7=new Date(2022,0,0) //dec 31 2021, deafult date is before day
console.log("date7 is",date7.toString())

console.log("getFullYear",date6.getFullYear())

//get date methods

//getFullYear() - returns the year (4 digits for 4-digit years) of the specified date according to local time.
//getMonth() - returns the month (0-11) in the specified date according to local time.
//getDate() - returns the day of the month (1-31) for the specified date according to local time.
//getDay() - returns the day of the week (0-6) for the specified date according to local time. 0 is Sunday, 1 is Monday, and so on.
//getHours() - returns the hour (0-23) of the specified date according to local time.
//getMinutes() - returns the minutes (0-59) of the specified date according to local time.
//getSeconds() - returns the seconds (0-59) of the specified date according to local time.
//getMilliseconds() - returns the milliseconds (0-999) of the specified date according to local time.
//getTime() - returns the numeric value corresponding to the time for the specified date according to universal time. The value is the number of milliseconds since January 1, 1970, 00:00:00 UTC.

//set date methods

//setFullYear(year)
//setMonth(month)
//setDate(dayOfMonth)
//setHours(hours)
//setMinutes(minutes)
//setSeconds(seconds)


