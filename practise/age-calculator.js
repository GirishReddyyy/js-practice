//Input:
let dob = "2000-05-15";
let date=new Date(dob)
// Tasks:
// 1. Calculate exact age in years

let today=new Date()
let age=today.getFullYear()-date.getFullYear()
if(today.getMonth()<date.getMonth()){
    age--
}
console.log("age in years is",age)