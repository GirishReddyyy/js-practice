let students={
    id:1,
    name:"Ravi",
    marks:78
}

console.log(students.name);
console.log(students.address);//undefined
//optional chaining and nullish coalescing
console.log(students.address?)//undefined 
console.log(students?.address?.city??"No city available");//No city available