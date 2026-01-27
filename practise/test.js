//api
//JSON (JavaScript Object Notation)

let student={
    sno:1,
    name:'ravi',
    age:20
}
console.log(typeof student)//object

//convert js object to json
let studentJSON=JSON.stringify(student)
console.log(typeof studentJSON)//string

//convert json to js object
let data =JSON.parse('{"sno":1,"name":"ravi","age":20}')
