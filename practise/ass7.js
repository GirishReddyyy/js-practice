const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// filter() students who passed (marks ≥ 40)
let res1=students.filter(element=>element.marks>=40)
console.log(res1)

// map() to add a grade field
//         ≥90 → A
//         ≥75 → B
//         ≥60 → C
//         else → D
//let res2=students.map()

// reduce() to calculate average marks
let res3=students.reduce((acc,el)=>acc+el.marks,0)
console.log(res3/students.length)

// find() the student who scored 92
let res4=students.find(element=>element.marks===92)
console.log(res4)

// findIndex() of student "Kiran"
let res5=students.findIndex(element=>element.name==="Kiran")
console.log(res5)

//map() and add grade