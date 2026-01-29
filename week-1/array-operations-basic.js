//array-operations

// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];
// 1. filter() temperatures above 35
let above35 = temperatures.filter(element => element > 35)
console.log("Above 35:",above35)

// 2. map() to convert all temperatures from Celsius → Fahrenheit  (9/5)+32
let fahrenheit = temperatures.map(element => element * (9 / 5) + 32)
console.log("Fahrenheit:",fahrenheit)

// 3. reduce() to calculate average temperature
let average = temperatures.reduce((acc, el) => acc + el, 0)
console.log("Average:",average / temperatures.length)

// 4. find() first temperature above 40
let above40 = temperatures.find(element => element > 40)
console.log("First above 40:",above40)
// 5. findIndex() of temperature 28
let indexof28 = temperatures.findIndex(element => element === 28)
console.log("Index of 28:",indexof28)
// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];

// 1. filter() courses with name length > 5
let lengt5 = courses.filter(element => element.length > 5)
console.log("Length > 5:",lengt5)

// 2. map() to convert course names to uppercase
let upper = courses.map(element => element.toUpperCase())
console.log("Uppercase:",upper)

// 3. reduce() to generate a single string:
//           "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
let reducer = upper.reduce((acc, el) => acc + " | " + el)
console.log(reducer)

// 4. find() the course "react"
let res1 = courses.find(element => element === "react")
console.log(res1)

// 5. findIndex() of "node"
let res2 = courses.findIndex(element => element === "node")
console.log("Index of node: ",res2)


// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

// Test data:
const marks = [78, 92, 35, 88, 40, 67];

// 1. filter() marks ≥ 40 (pass marks)
let pass = marks.filter(element => element >= 40)
console.log("Pass marks: ",pass)

// 2. map() to add 5 grace marks to each student
let grace = marks.map(element => element + 5)
console.log("After adding grace marks",grace)

// 3. reduce() to find highest mark
let res3 = marks.reduce((acc, el) => el > acc ? el : acc)
console.log("Highest Marks: ",res3)

// 4. find() first mark below 40
let res4 = marks.find(element => element < 40)
console.log(res4)

// 5. findIndex() of mark 92
let res5 = marks.findIndex(element => element === 92)
console.log("Index: ",res5)